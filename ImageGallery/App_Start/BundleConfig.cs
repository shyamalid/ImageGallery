using System.Web;
using System.Web.Optimization;

namespace ImageGallery
{
    public class BundleConfig
    {
        // For more information on bundling, visit http://go.microsoft.com/fwlink/?LinkId=301862
        public static void RegisterBundles(BundleCollection bundles)
        {
            bundles.Add(new ScriptBundle("~/bundles/jquery").Include(
                        "~/Scripts/jquery-{version}.js"));

            // Use the development version of Modernizr to develop with and learn from. Then, when you're
            // ready for production, use the build tool at http://modernizr.com to pick only the tests you need.
            bundles.Add(new ScriptBundle("~/bundles/modernizr").Include(
                        "~/Scripts/modernizr-*"));

            bundles.Add(new ScriptBundle("~/bundles/bootstrap").Include(
                      "~/Scripts/bootstrap.js",
                      "~/Scripts/respond.js"));

            bundles.Add(new StyleBundle("~/Content/css").Include(
                      "~/content/css/bootstrap.css",
                       "~/content/css/angular-block-ui.min.css",
                       "~/content/css/toastr.css",
                       "~/content/css/font-awesome.css",
                      "~/content/css/site.css",
                      "~/content/css/jquery.fancybox.css"));
            
                  bundles.Add(new ScriptBundle("~/bundles/angular").Include(
                "~/Scripts/jquery.js",
                "~/Scripts/jquery-ui.js",
                "~/Scripts/angular.js",
               "~/Scripts/angular-route.min.js",
               "~/Scripts/angular-animate.js",                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       
               "~/Scripts/angular-sanitize.min.js",
               "~/Scripts/angular-ui.js",
               "~/Scripts/angular-ui/ui-bootstrap.js",
               "~/Scripts/angular-ui/ui-bootstrap-tpls.js",
               "~/Scripts/angular-block-ui.js",
               "~/Scripts/toastr.js",
               "~/Scripts/jquery.fancybox.js",
               "~/Scripts/jquery.fancybox-media.js"
            ));

            bundles.Add(new ScriptBundle("~/bundles/ImageApp").Include(
                "~/ImageAppScripts/common.core.js",
                "~/ImageAppScripts/common.ui.js",
                "~/ImageAppScripts/imageApp.js",
                "~/ImageAppScripts/dataService.js",
                "~/ImageAppScripts/alertService.js",
                "~/ImageAppScripts/layout/topBar.directive.js",
                "~/ImageAppScripts/layout/sideBar.directive.js",
                "~/ImageAppScripts/layout/customPager.js",
                "~/ImageAppScripts/home/indexCtrl.js",
                "~/ImageAppScripts/home/rootCtrl.js",
                "~/ImageAppScripts/images/imageAddCtrl.js",
                "~/ImageAppScripts/images/imageDetailsCtrl.js",
                "~/ImageAppScripts/images/imageEditCtrl.js",
                "~/ImageAppScripts/images/imagesCtrl.js"

                ));
            BundleTable.EnableOptimizations = false;
        }
    }
}
