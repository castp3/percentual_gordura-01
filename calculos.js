function calculoMasc(){
    //idade 
    let tntIdade = document.getElementById('txtIdade')
    let Idade = Number(tntIdade.value)

    // Triceps
    let tntTri1 = document.getElementById('txtTri1')
    let Tri1 = parseFloat(Number(tntTri1.value))
    let tntTri2 = document.getElementById('txtTri2')
    let Tri2 = parseFloat(Number(tntTri2.value))
    let tntTri3 = document.getElementById('txtTri3')
    let Tri3 = parseFloat(Number(tntTri3.value))
    let TriF = parseFloat((Tri1+Tri2+Tri3)/3)

    // Supra Iliaca 
    let tntSupra1 = document.getElementById('txtSupra1')
    let Supra1 = parseFloat(Number(tntSupra1.value))
    let tntSupra2 = document.getElementById('txtSupra2')
    let Supra2 = parseFloat(Number(tntSupra2.value)) // Corrigido parseFloa(tNumber(tntSupra2.value)) para parseFloat(Number(tntSupra2.value))
    let tntSupra3 = document.getElementById('txtSupra3')
    let Supra3 = parseFloat(Number(tntSupra3.value))
    let SupraF = parseFloat((Supra1+Supra2+Supra3)/3)

    // Abdomen 
    let tntAbd1 = document.getElementById('txtAbd1')
    let Abd1 = parseFloat(Number(tntAbd1.value))
    let tntAbd2 = document.getElementById('txtAbd2')
    let Abd2 = parseFloat(Number(tntAbd2.value))
    let tntAbd3 = document.getElementById('txtAbd3')
    let Abd3 = parseFloat(Number(tntAbd3.value))
    let AbdF = parseFloat((Abd1+Abd2+Abd3)/3)

    // Verificar se os valores são números
    if (isNaN(TriF) || isNaN(SupraF) || isNaN(AbdF)) {
        alert("Por favor, insira números válidos.")
        return
    }

    // Densidade corporal e percentual de gordura  
    let somaD = (TriF + SupraF + AbdF)
    let DB2 = somaD * somaD
    let Dobras1 = 0.0008267 * somaD
    let Dobras2 = 0.0000016 * DB2
    let idad = Idade * 0.0001392
    let densidade =   1.1093800 - Dobras1 + Dobras2  - idad
    let gordura = (495 / densidade) -450

    // Arredondar o resultado
    gordura = gordura.toFixed(2)
    
    document.getElementById("resMasculo").innerHTML = `<h2>${gordura}%</h2>`; // Corrigido += para = para substituir o resultado anterior
}



function calculoFem(){
    //idade 
    let tntIdade = document.getElementById('txtIdade')
    let Idade = Number(tntIdade.value)

    // Triceps
    let tntTri1 = document.getElementById('txtTri1')
    let Tri1 = parseFloat(Number(tntTri1.value))
    let tntTri2 = document.getElementById('txtTri2')
    let Tri2 = parseFloat(Number(tntTri2.value))
    let tntTri3 = document.getElementById('txtTri3')
    let Tri3 = parseFloat(Number(tntTri3.value))
    let TriF = parseFloat((Tri1+Tri2+Tri3)/3)

    // Supra Iliaca 
    let tntSupra1 = document.getElementById('txtSupra1')
    let Supra1 = parseFloat(Number(tntSupra1.value))
    let tntSupra2 = document.getElementById('txtSupra2')
    let Supra2 = parseFloat(Number(tntSupra2.value))
    let tntSupra3 = document.getElementById('txtSupra3')
    let Supra3 = parseFloat(Number(tntSupra3.value))
    let SupraF = parseFloat((Supra1+Supra2+Supra3)/3)

    // Coxa 
    let tntCx1 = document.getElementById('txtCx1')
    let Cx1 = parseFloat(Number(tntCx1.value))
    let tntCx2 = document.getElementById('txtCx2')
    let Cx2 = parseFloat(Number(tntCx2.value))
    let tntCx3 = document.getElementById('txtCx3')
    let Cx3 = parseFloat(Number(tntCx3.value))
    let CxF = parseFloat((Cx1+Cx2+Cx3)/3)

    // Verificar se os valores são números
    if (isNaN(TriF) || isNaN(SupraF) || isNaN(CxF)) {
        alert("Por favor, insira números válidos.")
        return
    }

    // Densidade corporal e percentual de gordura  
    let somaD = TriF + SupraF + CxF;
    let DB2 = somaD * somaD;
    let Dobras1 = 0.0009929 * somaD;
    let Dobras2 = 0.0000023 * DB2;
    let idad = Idade * 0.0001392;
    let densidade = 1.0994921 - Dobras1 + Dobras2 - idad;
    let gordura = (495 / densidade) - 450;
    
    // Arredondar o resultado
    gordura = gordura.toFixed(2);
    
    document.getElementById("resFeminino").innerHTML = `<h2>${gordura}%</h2>`;
}

