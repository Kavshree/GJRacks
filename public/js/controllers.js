var listApp=angular.module('listApp',['ui.bootstrap']);

listApp.controller('ModalInstanceCtrl', function ($scope, $modalInstance, accessory)
{
$scope.accessory = accessory;

$scope.ok = function() {
	 modalInstance.close();
	};
});

listApp.controller('ContactFormController', ['$scope','$http', function($scope,$http){
	$scope.loading = false;
$scope.send = function (mail){
$scope.loading = true;
$http.post('/sendmail', {
from: 'CodeNx &lt;admin@angularcode.com&gt;',
to: 'kavyashri.bj@mail.com',
subject: 'Message from AngularCode',
text: mail.message
})
}
}])

listApp.controller('listCtrl', ['$scope','$modal','$log', function(scope,$modal,$log){
	 scope.accessories = [
              {
                "accessory_id": "1",
                "accessory_title": "Vericom Rack System Shelves, Drawers",
                "accessory_summary": "Vericom cabinets and accessories help to improve the finished look of your racks as well as add-on to them.",
                "accessory_desc": "Vericom cabinets and accessories help to improve the finished look of your racks as well as add-on to them. Cantilever and fixed shelves will add functionality to steel cabinets and relay racks with a low-profile design. Several types of cable managers can help to organize cabling components and minimize the clutter around network systems. Steel filler panels give the option to add customization and even ventilation to Vericom racks and server cabinets. To top it off, there are also three kinds of wheels available to give mobility to these storage systems.", 
                "accessory_imgurl":"imgs/accessory1.jpg"              
              },
              {
                "accessory_id": "2",
                "accessory_title": "Server Rack Shelves",
                 "accessory_summary": "Available in Black or White. Heavy duty shelves for supporting servers. ",
                "accessory_desc": "Available in Black or White. Heavy duty shelves for supporting servers. Multi server sliding shelves are mounted on a base shelf and slide out individually for easy servicing of servers. Due to heavy construction, many shelves can be mounted anywhere in the cabinet. Shelves are made to be compatible with most 19″ EIA cabinets. Flat Shelves mount to tapped mounting angles, 4-point mounting. Cantilever Shelves mount to tapped mounting angles, 2-point mounting. Shelves are available with heavy duty reinforced construction for heavy loads. Contact us for more modular options.", 
                "accessory_imgurl":"imgs/accessory2.jpg"              
              },
               {
                "accessory_id": "3",
                "accessory_title": "Ring bar, Modem Shelf, Vented Shelf",
                "accessory_summary": "Constructed from a variety of materials / thicknesses to the purchasers specification",
                "accessory_desc": "Constructed from a variety of materials / thicknesses to the purchasers specification ; items include fixed, adjustable and canterlevered shelves, chassis support angles, plinths and cable management. Standard powder coated finishes are black (RAL 9005) ang goosewing grey (BS 00A05).", 
                "accessory_imgurl":"imgs/accessory3.jpg"              
              },
               {
                "accessory_id": "4",
                "accessory_title": " Cable management products",
                "accessory_summary": "Designed to house and manage both copper and fibre, including cable trays for the management",
                "accessory_desc": "Designed to house and manage both copper and fibre, including cable trays for the management of vertical cable and robust customised cable chimneys for pre or postpatching installation.", 
                "accessory_imgurl":"imgs/accessory4.jpg"              
              },
               {
                "accessory_id": "5",
                "accessory_title": "PDU Accessories",
                "accessory_summary": "contain bracket kits specifically designed to mount many of the GJ vertical Rack power distribution Units",
                "accessory_desc": "contain bracket kits specifically designed to mount many of the GJ vertical Rack power distribution Units (PDUs) into third party racks or enclosures as well as a cord retention bracket to help retain power cord connection to the Rack PDUs. Specially designated SKUs in the Basic, Metered, and Switched Rack PDUs can utilize these bracket kits", 
                "accessory_imgurl":"imgs/accessory5.jpg"              
              },
               {
                "accessory_id": "6",
                "accessory_title": "Access Slots, Mounting Profiles",
                "accessory_summary": "Large cable access slots in the top and bottom plates- you can easily lead out cables.",
                "accessory_desc": "Large cable access slots in the top and bottom plates- you can easily lead out cables.Many of technical and accessory openings - you can improve your cabinet in many ways.Adjustable mounting profiles to optimize depth.4 leveling feet - suitable for any type of floor.Ships disassembled - assembly manual indluded.", 
                "accessory_imgurl":"imgs/accessory6.jpg"              
              },
               {
                "accessory_id": "7",
                "accessory_title": "RFSHELF19V",
                "accessory_summary": "Cantilever design ventilated rack shelf 19 17-1/2 useable in width - 50 lbs. capacity.",
                "accessory_desc": "Cantilever design ventilated rack shelf 19 17-1/2 useable in width - 50 lbs. capacity. 4 each 10-32 x 5/8 steel mounting screws are included.", 
                "accessory_imgurl":"imgs/accessory7.jpg"              
              },
               {
                "accessory_id": "8",
                "accessory_title": "CX Series Sliding Tray for Size 800(D)mm",
                "accessory_summary": "Sliding Tray. Available",
                "accessory_desc": "Sliding Tray. Available in different dimensions", 
                "accessory_imgurl":"imgs/accessory8.jpg"              
              }
             
            ];

            scope.gallery = [
              {
                "gallery_id": "1",
                "gallery_imgurl":"imgs/wall-mount.jpg"              
              },
              {
                "gallery_id": "2",
                "gallery_imgurl":"imgs/wall-mount-enclosure.jpg"              
              },
              {
                "gallery_id": "3",
                "gallery_imgurl":"imgs/open-frame-enclosure.jpg"              
              },
              {
                "gallery_id": "4",
                "gallery_imgurl":"imgs/floor-standing-enclosure.jpg"              
              },
              {
                "gallery_id": "5",
                "gallery_imgurl":"imgs/floor-standing-open.jpg"              
              },
              {
                "gallery_id": "6",
                "gallery_imgurl":"imgs/accessory2.jpg"              
              },
              {
                "gallery_id": "7",
                "gallery_imgurl":"imgs/accessory5.jpg"              
              },
              {
                "gallery_id": "8",
                "gallery_imgurl":"imgs/accessory4.jpg"              
              }
              ];

			scope.myModalInstance = scope.open = function (accessory) {
			var modalInstance = $modal.open({
			controller: "ModalInstanceCtrl",
			templateUrl: 'myModalContent.html',
			resolve: {
			accessory: function()
			{
			return accessory;
			}
			}
			});
			};
	}]);
