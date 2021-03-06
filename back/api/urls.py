from django.urls import include, path
from django.conf import settings
from django.conf.urls.static import static

from django_registration.backends.activation.views import RegistrationView

from rest_framework import routers
from rest_framework_jwt.views import obtain_jwt_token

from api.views.users import UserViewSet, GroupViewSet, AuthViewSet, SubscriptionViewSet, unfollow
from api.views.bigpictures import BigPictureViewSet, SubjectViewSet, OwnSubjectViewSet
from api.views.ratings import RatingViewSet, OwnRatingViewSet, EndorsmentViewSet, RatingWithContextViewSet, ReasonViewSet
from api.views.results import bigPictureResults, ratingResults
from api.views.categories import CategoryViewSet

from api.forms.base_user import BaseUserForm


router = routers.DefaultRouter()
router.register(r'users', UserViewSet)
router.register(r'subscriptions', SubscriptionViewSet)
router.register(r'groups', GroupViewSet)
router.register(r'bigpictures', BigPictureViewSet)
router.register(r'subjects', SubjectViewSet)
router.register(r'categories', CategoryViewSet)
router.register(r'ownsubjects', OwnSubjectViewSet)
router.register(r'ratings', RatingViewSet)
router.register(r'ratingswithcontext', RatingWithContextViewSet)
router.register(r'endorsments', EndorsmentViewSet)
router.register(r'ownratings', OwnRatingViewSet)
router.register(r'reasons', ReasonViewSet)

urlpatterns = [
    path('api/bigpictures/<int:pk>/results/', bigPictureResults),
    path('api/ratings/<int:pk>/results/', ratingResults),
    path('api/users/<int:target>/unfollow/', unfollow),
    path('api/token-auth/', obtain_jwt_token),
    path('api/', include(router.urls)),
    path('api-auth/', include('rest_framework.urls', namespace='rest_framework')),
    path('api/accounts/register/', RegistrationView.as_view(form_class=BaseUserForm)),
    path('accounts/', include('django_registration.backends.activation.urls')),
] + static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)
