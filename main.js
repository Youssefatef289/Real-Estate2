
// Google Tag Manager 
function setupGTM() {
    (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
    new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
    j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
    'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
    })(window,document,'script','dataLayer','GTM-TB7L6V');
  }
  
  setupGTM();
  // End Google Tag Manager 
  

  window.__variantsData = [ { name: 'A', chance: 100 } ];

  window.__page_id = 23730722;
    window.__customer_id = 3211176;
    window.__default_experience_id = 23730722;
    window.__version = 49;
    window.__variant = "A";
    window.__variant_id = 1;
    window.__variant_custom_name = "Variation A";
    window.__preview = false;
    window.__page_type = 2;
    window.__variant_hash = "6b975fe61789ea68877bc4109b15b532927ba7c0";
    window.__page_domain = "promotions.damacproperties.com";
    window.__page_generator = true;
    window.__experiment_id = null;
    window.__new_tracker = true;
    window._Translate = { 
      translations: {},
      set: function (text, translation) { this.translations[text] = translation; },
      get: function (text) { return this.translations[text] || text; }
    };
    // 



    document.getElementById('globalWhatsappBtn').style.display = 'none'




function popupOnEnqBtnClick(){
	const enquireBtn = document.getElementById('enquire-cta')

	var pageHasPopup = false //This is a flag. Will update to true if getPopupId() returns a non FALSE value
	var popupId = '' //This will be updated with the HTML id of the popup section if such a section exists

	//Popup ids - Only one out of these IDs will be present on the page. Creating an array since this is a global script.
	const possiblePopupIdArray = [
		'page-block-1j8l3co7njv',	//English, Non GDN
		'page-block-z0y0x8m02cs',	//Arabic, Non GDN
		'page-block-1j8l3co7njv',	//Russian, Non GDN
		'page-block-umi5ahf8zv',	//English, GDN
		'page-block-z0y0x8m02cs',	//Arabic, GDN
		'page-block-1j8l3co7njv'	//Russian, GDN
	]

	const getPopupId = () => {
		var returnValue = ''

		possiblePopupIdArray.map(obj => {
			if(document.getElementById(obj) !== null){
				popupId = obj
				pageHasPopup = true
				console.log('Page has popup with id: ' + obj)

			}
		})
	}
	getPopupId()

	if(pageHasPopup){
		enquireBtn.removeAttribute('href')
		enquireBtn.style.cursor = 'pointer'
		enquireBtn.addEventListener('click', () => {
			console.log('Clicked!')
			document.getElementById(popupId).style.display = 'block'
		})
	}
}


window.onload = function(){
  popupOnEnqBtnClick()
}
keepOpen = true;
// 


//register-now
$("#element-2053, #element-2191, #element-2241, #element-2240, #element-__gpage-block-p5nzo0okh9n-2428, #element-__gpage-block-p5nzo0okh9n-2429, #element-__gpage-block-p5nzo0okh9n-2430, #element-__gpage-block-p5nzo0okh9n-2431, #element-__gpage-block-p5nzo0okh9n-2432, #element-__gpage-block-p5nzo0okh9n-2433").on("click", function () {
    console.log("Sent with ",retrievedCampaignId);
        keepOpen = true;
      $(popUpId).fadeIn();
});
  
  // hide after submit
let closeFunc = () => {
        if($('#redirect').is(':visible'))
        {
          $(popUpId).css("display", "none");
        }else{
           setTimeout(closeFunc, 1500);
        }
      } 
document.getElementsByClassName("btn form-btn item-block")
[1].addEventListener("click", function() {

setTimeout(closeFunc, 1500);
});
  

//book-now
    $("#element-__gpage-block-xd72x109w5-1531").on("click", function () {
    console.log("Sent with ",retrievedCampaignId);
      keepOpen = true;
      $(popUpId).fadeIn();
});
$("#whatsapp-cta").attr("href",  whatsappurl);
});</script>
<!-- end custom HEAD code-->
</head>
<body id="landing-page">
<!-- Workspace Level Script Body -->

<!-- end Workspace Level Script Body -->

<!-- custom BODY code-->
<input type='hidden' name='form_id' id='form_id' value='instaPageForm'>
<input type='hidden' name='gtm_project_name' id='gtm_project_name' value=''>
<input type='hidden' name='gtm_project_id' id='gtm_project_id'  value=''>
<input type='hidden' name='gtm_project_category' id='gtm_project_category' value=''>
<input type='hidden' name='returnURL' id='returnURL' value=''>
<input type='hidden' name='uniq_vis_id' id='uniq_vis_id'>
<input type='hidden' name='lurl' id='lurl' value='https://www.damacproperties.com/en/offers/'><style>
  .whatsAppGlobalBtn{
      height: 60px;
      width: 60px;
      border-radius: 30px;
      background-color: green;
      display: none;
      justify-content: center;
      align-items: center;
      position: fixed;
      bottom: 120px;
      right: 40px;
      cursor: pointer;
        z-index: 500;
  }
  .whatsAppGlobalBtn img{
      height: 30px;
  }

@media only screen and (min-width: 1px) and (max-width: 600px) {
.whatsAppGlobalBtn {
bottom: 150px;
}
}
</style>
<a href="https://api.whatsapp.com/send?phone=97143019944&text=مرحبا, أود معرفة المزيد عن المشروع" target="_blank" id="globalWhatsappBtn" class="whatsAppGlobalBtn">
  <img src="https://dp-site-assets.s3.eu-west-1.amazonaws.com/uploads/revamp/images/Whatsapp+(1).svg" alt="">
</a>
<script>//Temporarily hide whatsapp button
document.getElementById('globalWhatsappBtn').style.display = 'none'




function popupOnEnqBtnClick(){
  const enquireBtn = document.getElementById('enquire-cta')

  var pageHasPopup = false //This is a flag. Will update to true if getPopupId() returns a non FALSE value
  var popupId = '' //This will be updated with the HTML id of the popup section if such a section exists

  //Popup ids - Only one out of these IDs will be present on the page. Creating an array since this is a global script.
  const possiblePopupIdArray = [
      'page-block-1j8l3co7njv',	//English, Non GDN
      'page-block-z0y0x8m02cs',	//Arabic, Non GDN
      'page-block-1j8l3co7njv',	//Russian, Non GDN
      'page-block-umi5ahf8zv',	//English, GDN
      'page-block-z0y0x8m02cs',	//Arabic, GDN
      'page-block-1j8l3co7njv'	//Russian, GDN
  ]

  const getPopupId = () => {
      var returnValue = ''

      possiblePopupIdArray.map(obj => {
          if(document.getElementById(obj) !== null){
              popupId = obj
              pageHasPopup = true
              console.log('Page has popup with id: ' + obj)

          }
      })
  }
  getPopupId()

  if(pageHasPopup){
      enquireBtn.removeAttribute('href')
      enquireBtn.style.cursor = 'pointer'
      enquireBtn.addEventListener('click', () => {
          console.log('Clicked!')
          document.getElementById(popupId).style.display = 'block'
      })
  }
}


window.onload = function(){
popupOnEnqBtnClick()
}
keepOpen = true;



