
from rest_framework import routers
from django.urls import path
from .views import TodoViewSet
from .views import addTask

router= routers.DefaultRouter()

router.register(r'api/todos',TodoViewSet,'todos')
# router.register(r'tasks/',TodoViewSet,'Add task')

urlpatterns=[
    path('new',addTask,name='addTask')
]
urlpatterns += router.urls

