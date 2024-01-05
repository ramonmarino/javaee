/**
 * Confirmação de Exclusão de um contato
 * @author Ramon Marino
 * @param idcon
 */

 function confirmar(idcon){
	 let resposta = confirm("Gostaria de excluir esse contato? ")
	 if(resposta === true){
		 
		window.location.href= "delete?idcon=" + idcon 
	 }
 }
 