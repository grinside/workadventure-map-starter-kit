"use strict";(self.webpackChunksketchfab=self.webpackChunksketchfab||[]).push([[3918],{K9VK:(e,i,o)=>{o.d(i,{Z:()=>w});var t=/iPhone/i,n=/iPod/i,a=/iPad/i,r=/\biOS-universal(?:.+)Mac\b/i,d=/\bAndroid(?:.+)Mobile\b/i,p=/Android/i,l=/(?:SD4930UR|\bSilk(?:.+)Mobile\b)/i,b=/Silk/i,s=/Windows Phone/i,u=/\bWindows(?:.+)ARM\b/i,c=/BlackBerry/i,h=/BB10/i,f=/Opera Mini/i,v=/\b(CriOS|Chrome)(?:.+)Mobile/i,m=/Mobile(?:.+)Firefox\b/i,g=function(e){return void 0!==e&&"MacIntel"===e.platform&&"number"==typeof e.maxTouchPoints&&e.maxTouchPoints>1&&"undefined"==typeof MSStream};function w(e){var i={userAgent:"",platform:"",maxTouchPoints:0};e||"undefined"==typeof navigator?"string"==typeof e?i.userAgent=e:e&&e.userAgent&&(i={userAgent:e.userAgent,platform:e.platform,maxTouchPoints:e.maxTouchPoints||0}):i={userAgent:navigator.userAgent,platform:navigator.platform,maxTouchPoints:navigator.maxTouchPoints||0};var o=i.userAgent,w=o.split("[FBAN");void 0!==w[1]&&(o=w[0]),void 0!==(w=o.split("Twitter"))[1]&&(o=w[0]);var k=function(e){return function(i){return i.test(e)}}(o),A={apple:{phone:k(t)&&!k(s),ipod:k(n),tablet:!k(t)&&(k(a)||g(i))&&!k(s),universal:k(r),device:(k(t)||k(n)||k(a)||k(r)||g(i))&&!k(s)},amazon:{phone:k(l),tablet:!k(l)&&k(b),device:k(l)||k(b)},android:{phone:!k(s)&&k(l)||!k(s)&&k(d),tablet:!k(s)&&!k(l)&&!k(d)&&(k(b)||k(p)),device:!k(s)&&(k(l)||k(b)||k(d)||k(p))||k(/\bokhttp\b/i)},windows:{phone:k(s),tablet:k(u),device:k(s)||k(u)},other:{blackberry:k(c),blackberry10:k(h),opera:k(f),firefox:k(m),chrome:k(v),device:k(c)||k(h)||k(f)||k(m)||k(v)},any:!1,phone:!1,tablet:!1};return A.any=A.apple.device||A.android.device||A.windows.device||A.other.device,A.phone=A.apple.phone||A.android.phone||A.windows.phone,A.tablet=A.apple.tablet||A.android.tablet||A.windows.tablet,A}}}]);