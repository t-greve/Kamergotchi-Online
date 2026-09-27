function lstestfunc(){
 try {
  localStorage.setItem("tlb_lstest", "test")
  localStorage.removeItem("tlb_lstest")
  return true
 }
 catch(error) {
  return false
 }
}

function getCookie(cookiename) {
 if(lstestfunc() && cookiename.indexOf("kgl_") == -1) {
  var value = localStorage.getItem(cookiename)
  return value
 }
 else {
  var search = cookiename + "=" 
  if (document.cookie.length > 0) {
   var offset = document.cookie.indexOf(search) 
   if (offset != -1) {
    offset += search.length 
    var end = document.cookie.indexOf(";", offset)  
    if (end == -1) end = document.cookie.length
    return unescape(document.cookie.substring(offset, end))
   }
  }
 }
}

function setCookie(cookiename, cvalue, exdays) {
 if(lstestfunc() && cookiename.indexOf("kgl_") == -1) {
  localStorage.setItem(cookiename, cvalue)
 }
 else {
  var datum = new Date()
  if (cookiename.indexOf("kgl_") == -1) {
   var expires = "expires="+ datum.toUTCString(datum.setTime(datum.getTime() + (exdays*24*60*60*1000)))
  }
  else {
   var expires = "Mon, 18 Jan 2038 00:00:00 GMT"
  }
  document.cookie = cookiename + "=" + cvalue + ";" + expires + ";path=/;samesite=lax"
 }
}

function deleteCookie(cookiename) {
 if (lstestfunc() && cookiename.indexOf("kgl_") == -1) {
  localStorage.removeItem(cookiename)
 }
 else {
  document.cookie = cookiename + "= ;expires=Thu, 01 Jan 1970 00:00:00 GMT;path=/;samesite=lax"
 }
}
