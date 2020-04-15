var receitas = [];
var linhas = [];
var d;
var a = jQuery('#formulario:demonstrativoList:tb tr').each(function(){

	
	var l = jQuery(this);
	if(l.find('.rich-table-cell').size()>0){
		receitas.push(linhas);
		linhas = [];	
		linhas.push(l.text());		
		console.log(l.text());
	}else{
	
		
		if(l.find("td:contains('DEBITO')").size()>0){
			d = parseFloat(l.text().split("R$")[1].replace('D','').replace('C','').trim().replace('.','').replace('.','').replace(',','.'));	
			console.log(l.text().split("R$")[1].replace('D','').replace('C','').trim().replace('.','').replace('.','').replace(',','.'));
		}
		if(l.find("td:contains('CREDITO')").size()>0){
			console.log(l.text().split("R$")[1].replace('D','').replace('C','').trim().replace('.','').replace('.','').replace(',','.'));
			var c = parseFloat(l.text().split("R$")[1].replace('D','').replace('C','').trim().replace('.','').replace('.','').replace(',','.'));			
			linhas.push(c-d);		
		}
	
	}
	

});
receitas = receitas.slice(2,receitas.length);
var total = 0;
for(var r in receitas){	
	total+=receitas[r][1];	
}
var t = ['TOTAL',total];
receitas.push(t);
console.log(receitas);

var texto = "";
var tab = jQuery('<table>');
jQuery('#banner_titulo').append('<br><br>');

for(var r in receitas){
	
	var n = receitas[r][1]+"";
	n = n.replace('.',',');
	tab.append('<tr><td>'+receitas[r][0]+"\t</td><td>"+n+'</td></tr>');
	
	texto += receitas[r][0]+"\t"+n+"\r";
		
}
jQuery('#banner_titulo').append(tab);

function copyToClipboard(text) {
    var dummy = document.createElement("textarea");   
    document.body.appendChild(dummy);    
    dummy.value = text;
    dummy.select();
    document.execCommand("copy");
    document.body.removeChild(dummy);
}
copyToClipboard(texto);
console.log(texto);
