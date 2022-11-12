function saveTextAsFile() {
    var textToWrite = 
    'Referência de Encomenda:' + '\n' + '\n' +
    '-----------------------------------------------------------' + '\n' + 
    
    'Nome: ' + document.getElementById("firstname").value + '\n' +
    'País: ' + document.getElementById("add-country").value + '\n' +
    'Morada: ' + document.getElementById("newStreet").value + '\n' +
    'Código Postal: ' + document.getElementById("newZipCode").value + '\n' +
    'Telefone: ' + document.getElementById("newPhone").value + '\n' +
    'E-mail: ' + document.getElementById("email").value + '\n' +
    'NIF: ' + document.getElementById("NIF").value + '\n' + '\n' +
    'Artigos Comprados:' + '\n' +
    '------------------------------------------------------------' + '\n' +
    'Preço: ' + localStorage.getItem('Total', total);

    

    var textFileAsBlob = new Blob([textToWrite], {
        type: 'text/plain'
    });
    saveAs(textFileAsBlob, "DadosPessoa.txt");

    var downloadLink = document.createElement("a");
    downloadLink.download = fileNameToSaveAs;

    if(window.webkitURL != null) {
        downloadLink.href = window.webkitURL.createObjectURL(textFileAsBlob);
    }
    downloadLink.click();
}   