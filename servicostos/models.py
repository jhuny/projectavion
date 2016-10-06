from __future__ import unicode_literals
from django.contrib import admin
from django.db import models

class avion(models.Model):
		id_avion = models.IntegerField()
		matricula_avion = models.CharField(max_length=30)
		tipo_avion = models.CharField(max_length=30)
		capacidad_avion = models.IntegerField()
		modelo_avion = models.CharField(max_length=30)
		def __unicode__(self):
			return u'%s'%self.id_avion

class avionAdmin(admin.ModelAdmin):
	list_display = ('id_avion','matricula_avion','tipo_avion','capacidad_avion','modelo_avion')


admin.site.register(avion, avionAdmin)
# Create your models here.
