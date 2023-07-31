function includeHTML()
{
  $('*[w3-include-html]').each((i, obj)=>{
    let jobj = $(obj)
    let file = jobj.attr('w3-include-html')
    jobj.load(file)
})
}