
from django.db.models import Avg, StdDev
from rest_framework import serializers
from api.models import BigPicture, BIGPICTURE_CODE, VOTATION_CODE, ARGUMENT_CODE
import math


def median_value(queryset, term):
    count = queryset.count()
    if count == 0:
    	return 0
    return queryset.values_list(term, flat=True).order_by(term)[math.trunc(count/2)]


class BigPictureSerializer(serializers.ModelSerializer):
	resources = serializers.PrimaryKeyRelatedField(many=True, read_only=True, required=False)
	kind = serializers.IntegerField()
	# arg fields
	nature = serializers.IntegerField(required=False)
	# votation fields
	choices = serializers.PrimaryKeyRelatedField(queryset=BigPicture.objects.filter(kind=BIGPICTURE_CODE), many=True, required=False)
	deadline = serializers.DateField(required=False)
	ratings = serializers.PrimaryKeyRelatedField(many=True, read_only=True, required=False)
	results = serializers.SerializerMethodField(read_only=True)

	class Meta:
		model = BigPicture
		fields = "__all__"

	def get_results(self, obj):
		if obj.kind != VOTATION_CODE:
			return None
		ratings = obj.ratings.all()
		res = []
		for choice in obj.choices.all():
			ratings = obj.ratings.filter(target=choice)
			reasons = choice.resources.filter(kind=ARGUMENT_CODE)
			res.append({
				"choice": choice.id,
				"total": ratings.count(),
				"median": median_value(ratings, 'value'),
				"average": ratings.aggregate(Avg('value'))['value__avg'],
				"reasons": {
					reason.id: ratings.filter(reasons__id=reason.id).count()
					for reason in reasons
				},
				0: ratings.filter(value=0).count(),
				1: ratings.filter(value=1).count(),
				2: ratings.filter(value=2).count(),
				3: ratings.filter(value=3).count(),
				4: ratings.filter(value=4).count(),
				5: ratings.filter(value=5).count(),
			})
		return res
