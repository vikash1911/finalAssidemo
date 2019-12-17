﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Web.Http;
using System.Web.Http.Cors;

namespace UserWebAPI
{
    public static class WebApiConfig
    {
        public static void Register(HttpConfiguration config)
        {
      // Web API configuration and services

        //var json = config.Formatters.JsonFormatter;
        //json.SerializerSettings.PreserveReferencesHandling = Newtonsoft.Json.PreserveReferencesHandling.Objects;
        //config.Formatters.Remove(config.Formatters.XmlFormatter);

      // Web API routes
      config.MapHttpAttributeRoutes();
            var cors = new EnableCorsAttribute("*", "*", "*");//origins,headers,methods   
            config.EnableCors(cors);

            config.Routes.MapHttpRoute(
                name: "DefaultApi",
                routeTemplate: "api/{controller}/{id}",
                defaults: new { id = RouteParameter.Optional }
            );
        }
    }
}
