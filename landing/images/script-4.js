window.cxs && window.cxs.setOptions({ prefix: "c2-" });
window.wsb=window.wsb||{};window.wsb["Theme13"]=window.wsb["Theme13"]||window.radpack("@widget/LAYOUT/bs-layout13-Theme-publish-Theme").then(function(t){return new t.default();});
window.wsb['context-bs-1']=JSON.parse("{\"renderMode\":\"PUBLISH\",\"fonts\":[\"muli\",\"quicksand\",\"\"],\"colors\":[\"#fff200\"],\"fontScale\":\"medium\",\"locale\":\"en-AU\",\"language\":\"en\",\"internalLinks\":{},\"isInternalPage\":true,\"navigationMap\":{\"2dbc3c68-54c1-4511-8f4b-14af5ec7c5f0\":{\"isFlyoutMenu\":false,\"active\":false,\"pageId\":\"2dbc3c68-54c1-4511-8f4b-14af5ec7c5f0\",\"name\":\"Home\",\"href\":\"/\",\"target\":\"\",\"visible\":true,\"requiresAuth\":false,\"tags\":[],\"rel\":\"\",\"type\":\"page\",\"showInFooter\":false},\"46bc840d-377f-4b47-b1f4-6700a005b7c0\":{\"isFlyoutMenu\":false,\"active\":false,\"pageId\":\"46bc840d-377f-4b47-b1f4-6700a005b7c0\",\"name\":\"404\",\"href\":\"/404\",\"target\":\"\",\"visible\":false,\"requiresAuth\":false,\"tags\":[\"404\"],\"rel\":\"\",\"type\":\"page\",\"showInFooter\":false},\"60e47323-77da-4ab1-bb82-547aa8cf25b4\":{\"isFlyoutMenu\":false,\"active\":true,\"pageId\":\"60e47323-77da-4ab1-bb82-547aa8cf25b4\",\"name\":\"Contact Us\",\"href\":\"/contact-us\",\"target\":\"\",\"visible\":true,\"requiresAuth\":false,\"tags\":[],\"rel\":\"\",\"type\":\"page\",\"showInFooter\":false}},\"dials\":{\"fonts\":{\"primary\":{\"id\":\"muli\",\"description\":\"\",\"tags\":[],\"meta\":{\"order\":25,\"primary\":{\"id\":\"muli\",\"name\":\"Muli\",\"url\":\"//fonts.googleapis.com/css?family=Muli:400&display=swap\",\"family\":\"'Muli', sans-serif\",\"size\":16,\"weight\":400,\"weights\":[400,700]},\"alternate\":{\"id\":\"quicksand\",\"name\":\"Quicksand\",\"url\":\"//fonts.googleapis.com/css?family=Quicksand:400,700&display=swap\",\"family\":\"Quicksand, sans-serif\",\"size\":16,\"weight\":400,\"weights\":[400,700],\"styles\":{\"letterSpacing\":\"normal\",\"textTransform\":\"none\"}}}},\"alternate\":{\"id\":\"quicksand\",\"description\":\"\",\"tags\":[],\"meta\":{\"order\":16,\"alternate\":{\"id\":\"quicksand\",\"name\":\"Quicksand\",\"url\":\"//fonts.googleapis.com/css?family=Quicksand:400,700&display=swap\",\"family\":\"Quicksand, sans-serif\",\"size\":16,\"weight\":400,\"weights\":[400,700],\"styles\":{\"letterSpacing\":\"normal\",\"textTransform\":\"none\"}}}}},\"colors\":[{\"id\":\"#fff200\",\"meta\":{\"primary\":\"rgb(255, 242, 0)\",\"accent\":\"rgb(17, 17, 17)\",\"neutral\":\"rgb(255, 255, 255)\"}}]},\"theme\":\"Theme13\"}");
window.deferBootstrap({elId:'bs-1',componentName:'@widget/LAYOUT/bs-Hamburger-Component',props:JSON.parse("{\"toggleId\":\"n-98461-navId-mobile\",\"uniqueId\":\"n-98461\",\"style\":{\"color\":\"highContrast\",\"marginLeft\":\"0\",\":hover\":{\"color\":\"highlight\"},\"@md\":{\"display\":\"none\"}},\"widgetId\":\"fbdec8e3-e483-4850-9e5e-d0c2f6f0ccd6\",\"section\":\"default\",\"category\":\"accent\",\"locale\":\"en-AU\",\"renderMode\":\"PUBLISH\"}"),context:JSON.parse("{\"widgetId\":\"fbdec8e3-e483-4850-9e5e-d0c2f6f0ccd6\",\"widgetType\":\"HEADER\",\"widgetPreset\":\"header9\",\"section\":\"default\",\"category\":\"accent\",\"fontSize\":\"medium\",\"fontFamily\":\"alternate\",\"group\":\"Section\",\"groupType\":\"Default\",\"websiteThemeOverrides\":{},\"widgetThemeOverrides\":{}}"),contextKey:'context-bs-1',radpack:"@widget/LAYOUT/bs-Hamburger-Component"},false);
window.wsb["DynamicFontScaler"]=function({containerId:e,targetId:t,fontSizes:a,maxLines:o,prioritizeDefault:r}){if("undefined"==typeof document)return;const l=document.getElementById(e),n=document.getElementById(t);function i(e){return function(e){const t=parseInt(c(e,"padding-left")||0,10),a=parseInt(c(e,"padding-right")||0,10);return e.scrollWidth+t+a}(e)<=l.clientWidth&&function(e){const t=e.offsetHeight,a=parseInt(c(e,"line-height"),10)||1;return Math.floor(t/a)}(e)<=o}function s(){if(!l||!n)return;if(n.hasAttribute("data-font-scaled"))return void function(){n.removeAttribute("data-last-size");const e=document.querySelector(`#${t}-style`);e&&e.parentNode.removeChild(e)}();const o=Array.prototype.slice.call(l.querySelectorAll(`[data-scaler-id="scaler-${e}"]`)).sort(((e,t)=>a.indexOf(e.getAttribute("data-size"))-a.indexOf(t.getAttribute("data-size"))));if(l.clientWidth&&o.length){const e=l.style.width||"";l.style.width="100%",o.forEach((e=>{e.style.display="inline-block",e.style.maxWidth=`${l.clientWidth}px`}));const a=function(e){return e.find(i)||e[e.length-1]}(o);!function(e){e.forEach((e=>{e.style.display="none",e.style.maxWidth=""}))}(o),l.style.width=e;const s=c(a,"font-size"),g=n.getAttribute("data-last-size");if(s&&s!==g){if(r){const e=c(n,"font-size");if(parseInt(s,10)>=parseInt(e,10))return}n.setAttribute("data-last-size",s);let e=document.querySelector(`#${t}-style`);e||(e=document.createElement("style"),e.id=`${t}-style`,document.head.appendChild(e)),e.textContent=`#${n.id} { font-size: ${s} !important; }`}}}function c(e,t){return document.defaultView.getComputedStyle(e).getPropertyValue(t)}if(s(),window.ResizeObserver&&l){new ResizeObserver((()=>{window.requestAnimationFrame(s)})).observe(l)}else window.addEventListener("resize",s)};
window.wsb["DynamicFontScaler"](JSON.parse("{\"containerId\":\"logo-container-98468\",\"targetId\":\"logo-text-98469\",\"fontSizes\":[\"xxlarge\",\"xlarge\",\"large\"],\"maxLines\":3,\"prioritizeDefault\":true}"));
window.wsb["DynamicFontScaler"](JSON.parse("{\"containerId\":\"logo-container-98473\",\"targetId\":\"logo-text-98474\",\"fontSizes\":[\"xxlarge\",\"xlarge\",\"large\"],\"maxLines\":1,\"prioritizeDefault\":true}"));
window.deferBootstrap({elId:'bs-2',componentName:'@widget/LAYOUT/bs-LinkAwareComponent',props:JSON.parse("{\"toggleId\":\"more-98476\",\"label\":\"More\",\"dataAid\":\"NAV_MORE\",\"navBarId\":\"navBarId-98471\",\"widgetId\":\"fbdec8e3-e483-4850-9e5e-d0c2f6f0ccd6\",\"section\":\"default\",\"category\":\"accent\",\"locale\":\"en-AU\",\"renderMode\":\"PUBLISH\"}"),context:JSON.parse("{\"widgetId\":\"fbdec8e3-e483-4850-9e5e-d0c2f6f0ccd6\",\"widgetType\":\"HEADER\",\"widgetPreset\":\"header9\",\"section\":\"default\",\"category\":\"accent\",\"fontSize\":\"medium\",\"fontFamily\":\"alternate\",\"group\":\"Nav\",\"groupType\":\"Default\",\"websiteThemeOverrides\":{},\"widgetThemeOverrides\":{}}"),contextKey:'context-bs-1',radpack:"@widget/LAYOUT/bs-LinkAwareComponent"},false);
window.wsb["CalculateNavSpacing"]=function({containerId:e,navId:t,logoImageId:a,inlineUtilitiesMenu:n}){let l,i,o,r,c,s,g;const p=document.getElementById(t);function d(){if(i||!p||!w(p))return;o=Array.from(p.children),o.forEach(b),n&&(r=o.pop(),h(r)),c=o.pop();const e=c.querySelector("ul");s=e?Array.from(e.children):[],p.style.whiteSpace="normal",g=w(p.parentElement,"floor"),p.style.whiteSpace="nowrap",window.requestAnimationFrame(u)}function u(){const e=o.map((e=>w(e)));const t=r?w(r):0,a=g-t;if(I(e)>a){const t=w(c);for(let n=I(e);n+t>a;n-=e.pop());const n=e.length;m(o,0,n,h),m(s,0,n,v),m(o,n,o.length,v),m(s,n,o.length,h),h(c)}else o.forEach(h),v(c);window.dispatchEvent(new Event("NavItemsResized"))}function y(){window.innerWidth<1024||(window.clearTimeout(l),l=window.setTimeout(d,50))}function m(e,t,a,n){e=e.slice(t,a).map(n).concat(e.slice(a))}function b(e){e.style.visibility="hidden",e.style.display="",e.classList.remove("visible")}function v(e){e.style.display="none",e.classList.remove("visible")}function h(e){e.style.visibility="visible",e.style.display="",e.classList.add("visible")}function I(e){return e.reduce(((e,t)=>e+t),0)}function w(e,t="ceil"){return"ceil"===t?Math.ceil(e.getBoundingClientRect().width):Math.floor(e.getBoundingClientRect().width)}if(y(),window.ResizeObserver){const t=new window.ResizeObserver(y);return[document.getElementById(e),document.getElementById(a)].forEach((e=>e&&t.observe(e))),()=>{i=!0,t.disconnect()}}return window.addEventListener("resize",y,{passive:!0}),()=>{i=!0,window.removeEventListener("resize",y,{passive:!0})}};
window.wsb["CalculateNavSpacing"](JSON.parse("{\"navId\":\"nav-98475\",\"logoImageId\":\"logo-98470\",\"containerId\":\"navBarId-98471\"}"));
window.wsb["StickyNav"]=function({uniqueId:e,wrapperId:t,logoHeight:o,hasAnimation:i}){const a=/#[^\\?]*/;if("undefined"==typeof window)return;const n={};function s(e){const t=(e.target.href.match(a)[0]||[]).slice(1),o=document.getElementById(t);o&&r(o)}function r(e){const t=n.stickyNav.clientHeight;let o=e.offsetTop;const i=setInterval((()=>{e.offsetTop===o?(clearInterval(i),scrollTo({top:e.offsetTop-t})):o=e.offsetTop}),300)}function l(){c(),d()}function c(){const{navWrapper:e,stickyNav:t}=n,o=Array.from(document.querySelectorAll('[data-aid="HEADER_LOGO_IMAGE_RENDERED"]')).find((e=>e.offsetHeight)),i=t&&t.offsetHeight;o&&(n.logo=o),t&&(i!==this.originalNavHeight&&(e.style.height=`${i}px`),0===g()&&(this.originalNavHeight=i,this.originalNavPaddingTop=this.navContainer.style.paddingTop));const a=document.querySelector('[data-aid="BANNER_RENDERED"]');a&&(n.banner=a);const s=document.querySelector("[data-freemium-ad]");s&&(n.ad=s)}function g(){return this.scrollParent===window?window.scrollY||document.documentElement.scrollTop||document.body.scrollTop||0:this.scrollParent.scrollTop}function d(){const{stickyNav:e,navWrapper:t,logo:o,i18nBar:a,banner:s,ad:r}=n,l=g(),c=0!==l,d=window.innerWidth<768,p=c&&l>=this.originalNavHeight,h=d?30:15,u=s?s.offsetHeight:0;u&&l>=u+h||!u&&c?e.style.position="fixed":u&&l<u+h&&(e.style.position="initial"),a&&a.clientHeight>0&&c&&(this.wasI18nBarPresent=!0,a.style.display="none"),a&&this.wasI18nBarPresent&&!c&&(a.style.display="flex"),o&&(o.style.maxHeight=d?(p?50:80)+"px":`${p?64:this.originalLogoHeight}px`,"HEADER_LOGO_OVERHANG_CONTAINER"===o.parentNode.getAttribute("data-aid")&&(o.parentNode.style.height=p?"auto":"1em",o.style.boxShadow=p?"none":this.originalLogoShadow,o.style.marginTop=p?"0px":this.originalLogoMarginTop),o.style.width="auto"),i&&!e.classList.contains("sticky-animate")&&l>=this.originalNavHeight?(e.classList.add("sticky-animate"),e.classList.add("x-c-bg")):l<this.originalNavHeight&&(e.classList.remove("sticky-animate"),e.classList.remove("x-c-bg")),t.style.height=this.originalNavHeight+"px",e.style.zIndex=1e4,e.style.left=0,e.style.right=0,e.style.top=r?`${r.offsetHeight}px`:0}!function(){if(this.scrollParent=function(){const t=document.getElementById(e);return Array.from(document.querySelectorAll(".widget-list-box, .viewport, #render-container, .scaler-content")).find((e=>e.contains(t)))||window}(),this.scrollParent.addEventListener("scroll",d,{passive:!0}),window.addEventListener("resize",c),window.addEventListener("load",l),this.elementLinks=Array.from(document.querySelectorAll("a")).filter((e=>a.test(e.href))),this.elementLinks.forEach((e=>e.addEventListener("click",s))),!n.stickyNav){this.originalLogoHeight=o;const i=Array.from(document.querySelectorAll('[data-aid="HEADER_LOGO_IMAGE_RENDERED"]'));i.forEach((e=>{e.style.transition="max-height .5s",e.style.willChange="transform"})),n.banner=document.querySelector('[data-aid="BANNER_RENDERED"]'),n.i18nBar=document.querySelector('[data-aid="i18n_BAR_RENDERED"]'),n.stickyNav=document.getElementById(e),n.navWrapper=document.getElementById(t),n.logo=i.find((e=>e.offsetHeight)),this.originalNavHeight=n.navWrapper.offsetHeight}const i=n.logo;if(i){i.style.height=i.offsetHeight;const e=window.getComputedStyle(i);this.originalLogoShadow=e.getPropertyValue("box-shadow"),this.originalLogoMarginTop=e.getPropertyValue("margin-top")}if(n.stickyNav&&(this.navContainer=n.stickyNav.querySelector('[data-ux="Container"]'),this.originalNavPaddingTop=this.navContainer.style.paddingTop,window.location.hash)){const e=document.getElementById(window.location.hash.slice(1));e&&r(e)}if(n.banner){n.banner.style.transition="all .5s"}}(),d()};
window.wsb["StickyNav"](JSON.parse("{\"uniqueId\":\"header_stickynav98463\",\"wrapperId\":\"header_navwrapper98464\",\"logoHeight\":80,\"hasAnimation\":true}"));
window.deferBootstrap({elId:'bs-3',componentName:'@widget/CONTACT/bs-contact3-contact-form',props:JSON.parse("{\"formTitle\":\"Get in Touch!\",\"formFields\":[{\"type\":\"SINGLE_LINE\",\"label\":\"Name\",\"required\":false},{\"type\":\"EMAIL\",\"label\":\"Email\",\"validation\":\"email\",\"required\":true,\"replyTo\":true},{\"type\":\"MULTI_LINE\",\"label\":\"Message\",\"required\":true},{\"type\":\"ATTACHMENT\",\"label\":\"Attachments\",\"required\":false,\"attachmentsEnabled\":false,\"attachmentsLabel\":\"\"},{\"type\":\"SUBMIT\",\"label\":\"Send\",\"required\":false}],\"blankInfo\":false,\"formSubmitHost\":\"https://contact.apps-api.instantpage.secureserver.net\",\"recaptchaEnabled\":true,\"recaptchaType\":\"V3\",\"domainName\":\"johnteague.me\",\"formSuccessMessage\":\"Thank you for your inquiry! We will get back to you within 48 hours.\",\"formEnabled\":true,\"websiteId\":\"f4e763b1-03e2-4764-acd8-91d5e3ef8a11\",\"pageId\":\"60e47323-77da-4ab1-bb82-547aa8cf25b4\",\"accountId\":\"bbb59730-f1c7-11eb-822d-3417ebe72601\",\"staticContent\":{\"today\":\"Today\",\"submitButtonLoadingLabel\":\"Sending\",\"contactFormResponseErrorMessage\":\"Something went wrong while sending your message, please try again later\",\"phoneValidationErrorMessage\":\"Please enter a valid phone number.\",\"defaultCancelButtonLabel\":\"Cancel\",\"byAppointment\":\"By Appointment\",\"defaultSubmitButtonLabel\":\"Send\",\"unsupportedFileType\":\"Unsupported file type\",\"maxFileCountLimit\":\"Only {0} files are allowed\",\"closed\":\"Closed\",\"attachments\":\"Attachments\",\"termsOfSerivce\":\"Terms of Service\",\"attachFiles\":\"Attach Files\",\"recaptchaDisclosure\":\"This site is protected by reCAPTCHA and the Google {privacyPolicy} and {termsOfSerivce} apply.\",\"emailValidationErrorMessage\":\"Please enter a valid email address.\",\"mapCTA\":\"Get directions\",\"privacyPolicyURL\":\"https://policies.google.com/privacy\",\"requiredValidationErrorMessage\":\"Please fill in this required field\",\"openToday\":\"Open today\",\"couldNotAttach\":\"Could not attach the following file(s)\",\"totalFileSizeLimit\":\"Total files would exceed {0} limit\",\"privacyPolicy\":\"Privacy Policy\",\"termsOfSerivceURL\":\"https://policies.google.com/terms\",\"fileSizeLimit\":\"File exceeds {0} limit\",\"emailMaxCountValidationErrorMessage\":\"Your email address is too long\"},\"emailOptInEnabled\":false,\"emailOptInMessage\":\"Sign up for our email list for updates, promotions, and more.\",\"emailConfirmationMessage\":\"We've sent you a confirmation email, please click the link to verify your address.\",\"widgetId\":\"2e885e1e-c9f0-4504-8105-d32c3d8e927a\",\"section\":\"default\",\"category\":\"neutral\",\"locale\":\"en-AU\",\"renderMode\":\"PUBLISH\"}"),context:JSON.parse("{\"widgetId\":\"2e885e1e-c9f0-4504-8105-d32c3d8e927a\",\"widgetType\":\"CONTACT\",\"widgetPreset\":\"contact3\",\"section\":\"default\",\"category\":\"neutral\",\"fontSize\":\"medium\",\"fontFamily\":\"alternate\",\"group\":\"Content\",\"groupType\":\"Default\",\"websiteThemeOverrides\":{},\"widgetThemeOverrides\":{}}"),contextKey:'context-bs-1',radpack:"@widget/CONTACT/bs-contact3-contact-form"},false);
window.deferBootstrap({elId:'bs-4',componentName:'@widget/SUBSCRIBE/bs-subscribe2-subscribe-form',props:JSON.parse("{\"upgradeable\":false,\"preset\":\"subscribe2\",\"id\":\"8220f0de-a2fb-4b3e-9352-be1c99acd1ec\",\"env\":\"production\",\"websiteId\":\"f4e763b1-03e2-4764-acd8-91d5e3ef8a11\",\"accountId\":\"bbb59730-f1c7-11eb-822d-3417ebe72601\",\"hasNonCommercePlan\":true,\"couponToggleHidden\":false,\"sectionTitle\":\"Subscribe\",\"staticContent\":{\"defaultButtonLabel\":\"Sign Up\",\"emailPlaceholderText\":\"Email Address\",\"verificationText\":\"To let us know it's really you and that you'd like to receive emails from us, please click the link in the confirmation email we just sent you. You can unsubscribe from these emails at any time.\",\"emailErrorMessage\":\"Please enter a valid email address.\"},\"confirmationMessage\":\"Great, now please verify your email\",\"couponConfirmationMessage\":\"Thanks so much for signing up!\",\"description\":\"Sign up to hear from us about specials, sales, and events.\",\"couponDescription\":\"Stay up to date on my thoughts on the industry!\",\"inputPlaceholder\":\"Email Address\",\"subscribeButtonLabel\":\"Sign up\",\"couponToggle\":true,\"widgetId\":\"8220f0de-a2fb-4b3e-9352-be1c99acd1ec\",\"section\":\"alt\",\"category\":\"neutral\",\"locale\":\"en-AU\",\"renderMode\":\"PUBLISH\"}"),context:JSON.parse("{\"widgetId\":\"8220f0de-a2fb-4b3e-9352-be1c99acd1ec\",\"widgetType\":\"SUBSCRIBE\",\"widgetPreset\":\"subscribe2\",\"order\":1,\"section\":\"alt\",\"category\":\"neutral\",\"fontSize\":\"medium\",\"fontFamily\":\"alternate\",\"group\":\"Group\",\"groupType\":\"Default\",\"websiteThemeOverrides\":{},\"widgetThemeOverrides\":{}}"),contextKey:'context-bs-1',radpack:"@widget/SUBSCRIBE/bs-subscribe2-subscribe-form"},false);
window.wsb["CookieBannerScript"]=function({id:e,acceptCookie:t,dismissCookie:o}){let a,n,i;function l(e,t=60){const o=new Date;o.setTime(o.getTime()+864e5*t);const a=`expires=${o.toUTCString()}`;document.cookie=`${e}=true;${a};path=/`}function r(e){return document.cookie.includes(e)}function s(){n&&n.removeEventListener("click",c),i&&i.removeEventListener("click",p),a.style.display="none"}function c(e){e.preventDefault(),g(),l(o),l(t),s()}function p(e){var a;e.preventDefault(),l(o),r(t)&&(a=t,document.cookie=`${a}=;expires=Thu, 01 Jan 1970 00:00:00 GMT;path=/`),s()}function g(){window._allowCT=!0,window._allowCTListener&&window._allowCTListener.forEach((e=>e()))}r(t)?g():r(o)||setTimeout((()=>{a=document.getElementById(`${e}-banner`),n=document.getElementById(`${e}-accept`),i=document.getElementById(`${e}-decline`),n&&n.addEventListener("click",c),i&&i.addEventListener("click",p),a.style.transform="translateY(-500px)"}),200)};
window.wsb["CookieBannerScript"](JSON.parse("{\"id\":\"7e0c4d43-e8b3-4dcd-8ff9-79738076c5cf\",\"dismissCookie\":\"cookie_warning_dismissed\",\"acceptCookie\":\"cookie_terms_accepted\"}"));
Core.utils.renderBootstrap({elId:'bs-5',componentName:'@widget/MESSAGING/bs-Component',props:JSON.parse("{\"config\":{\"formSubmitEndpoint\":\"/messaging\",\"contactsHost\":\"https://contacts.godaddy.com\",\"conversationsWebHost\":\"https://conversations.godaddy.com\",\"formSubmitHost\":\"https://contact.apps-api.instantpage.secureserver.net\",\"generateUrlHost\":\"https://url-generator.apps.secureserver.net\",\"vNextApiHost\":\"https://websites.api.godaddy.com\"},\"upgradeable\":false,\"preset\":\"messaging1\",\"order\":0,\"id\":\"bd48f592-b2de-4881-8f2b-4e0da7d84d69\",\"env\":\"production\",\"isMobile\":null,\"websiteId\":\"f4e763b1-03e2-4764-acd8-91d5e3ef8a11\",\"accountId\":\"bbb59730-f1c7-11eb-822d-3417ebe72601\",\"isReseller\":false,\"domainName\":\"johnteague.me\",\"staticContent\":{\"submitButtonLoadingLabel\":\"Sending\",\"infoStartTitle\":\"Conversations\",\"contactFormResponseErrorMessage\":\"Something went wrong while sending your message, please try again later\",\"infoStartDesc\":\"Respond smarter and faster to website messages, text messages and Facebook Messenger. Receive instant notifications, reply from anywhere, all from your phone.\",\"infoStartTag\":\"New\",\"phoneValidationErrorMessage\":\"Please enter a valid phone number.\",\"defaultCancelButtonLabel\":\"Cancel\",\"contactsLinkInfoMessaging\":\"Contacts from your website messaging form are captured in Connections.\",\"defaultSubmitButtonLabel\":\"Send\",\"endOfChat\":\"end of chat\",\"infoConnectedDesc\":\"You are connected to the Conversations mobile app and are currently receiving all website messages there.\",\"infoRecommendedTag\":\"Recommended\",\"infoStartLink\":\"Get Started\",\"phoneUsOnlyValidationErrorMessage\":\"Please enter a valid U.S. mobile phone number.\",\"infoIncludedTag\":\"Included\",\"infoPublishRequiredDesc\":\"A publish is needed in order to complete this first step of enabling this feature.\",\"infoPendingLoginDesc\":\"A text message has been sent to you to download the Conversations app. Please download and install to complete set up.\",\"termsOfSerivce\":\"Terms of Service\",\"infoUnavailableDesc\":\"We currently only allow this to work with one website. To use this feature on this website, please disconnect from the active one.\",\"recaptchaDisclosure\":\"This site is protected by reCAPTCHA and the Google {privacyPolicy} and {termsOfSerivce} apply.\",\"emailValidationErrorMessage\":\"Please enter a valid email address.\",\"privacyPolicyURL\":\"https://policies.google.com/privacy\",\"infoUnavailableTitle\":\"Conversations\",\"requiredValidationErrorMessage\":\"Please fill in this required field\",\"infoUnavailableTag\":\"Unavailable\",\"contactsLinkText\":\"Manage my contacts\",\"privacyPolicy\":\"Privacy Policy\",\"infoPublishRequiredLink\":\"Publish Now\",\"infoPendingLoginLink\":\"Resend Link\",\"infoConnectedTitle\":\"Conversations Mobile App\",\"termsOfSerivceURL\":\"https://policies.google.com/terms\",\"messagesRatesLegalDisclosure\":\"By submitting your phone number, you agree to receive text messages from us. Message/ data rates may apply.\",\"emailMaxCountValidationErrorMessage\":\"Your email address is too long\",\"infoConnectedTag\":\"Connected\"},\"businessName\":\"John Teague\",\"emailConfirmationMessage\":\"We've sent you a confirmation email, please click the link to verify your address.\",\"recaptchaType\":\"V3\",\"formFields\":[{\"keyName\":\"name\",\"type\":\"SINGLE_LINE\",\"label\":\"Name\",\"validation\":\"required\",\"required\":true},{\"keyName\":\"phone\",\"type\":\"PHONE\",\"label\":\"Mobile\",\"validation\":\"phone\",\"required\":true},{\"keyName\":\"email\",\"type\":\"EMAIL\",\"label\":\"Email\",\"validation\":\"email\",\"required\":true,\"replyTo\":true},{\"keyName\":\"message\",\"type\":\"MULTI_LINE\",\"label\":\"How can we help?\",\"validation\":\"required\",\"required\":true},{\"type\":\"SUBMIT\",\"label\":\"Send\"}],\"notificationPreference\":\"EMAIL\",\"formEmail\":\"j.teague@mail.com\",\"welcomeMessage\":\"Hi! Let us know how we can help and we\u2019ll respond shortly.\",\"formSuccessMessage\":\"Thanks for the message. We'll get back to you as soon as we can.\",\"emailOptInEnabled\":true,\"emailOptInMessage\":\"Sign up to receive email updates, announcements, and more.\",\"widgetId\":\"bd48f592-b2de-4881-8f2b-4e0da7d84d69\",\"section\":\"default\",\"category\":\"neutral\",\"locale\":\"en-AU\",\"renderMode\":\"PUBLISH\"}"),context:JSON.parse("{\"widgetId\":\"bd48f592-b2de-4881-8f2b-4e0da7d84d69\",\"widgetType\":\"MESSAGING\",\"widgetPreset\":\"messaging1\",\"section\":\"default\",\"category\":\"neutral\",\"fontSize\":\"medium\",\"fontFamily\":\"alternate\",\"websiteThemeOverrides\":{},\"widgetThemeOverrides\":{}}"),contextKey:'context-bs-1',radpack:"@widget/MESSAGING/bs-Component"});
document.getElementById('page-98460').addEventListener('click', function() {}, false);