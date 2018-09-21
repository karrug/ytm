from django.shortcuts import render
from django.http.response import HttpResponse, HttpResponseRedirect, JsonResponse


def home(request):
    return render(request, 'base.html')
