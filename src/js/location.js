let params = (new URL(document.location)).searchParams;
console.log(window.navigator.systemLanguage)
let language = window.navigator ? (params.get("lang") ||
    window.navigator.systemLanguage ) : "en";
console.log(language)
language = language.substr(0, 2).toLowerCase();
fetch(`src/Localizations/${language}.json`)
    .then(response => response.json())
    .then(data => {
        console.log(data)
        document.querySelector('#Restore').innerHTML = data['Restore']
        document.querySelector('#UnlimitedAccess').innerHTML = data["Unlimited Access<br>to All Features"]
        document.querySelector('#UnlimitedDocuments').innerHTML = data["Unlimited documents"]
        document.querySelector('#ExportCloud').innerHTML = data["ExportCloud"]
        document.querySelector('#TextRecognition').innerHTML = data["Text recognition (OCR)"]
        document.querySelector('#Monthly').innerHTML = data["Monthly"]
        document.querySelector('#priceMonth').innerHTML = data["<strong>{{price}}</strong><br>per month"]
        document.querySelector('#freeDay').innerHTML = data["3 DAYS FREE"]
        document.querySelector('#monthPay').innerHTML = data["{{price}}/month"]
        document.querySelector('#Annually').innerHTML = data["Annually"]
        document.querySelector('#priceYear').innerHTML = data["<strong>{{price}}</strong><br>per year"]
        document.querySelector('#popular').innerHTML = data["MOST POPULAR"]
        document.querySelector('#monthPayYear').innerHTML = data["{{price}}/month"]
        document.querySelector('#buttonContinue').innerHTML = data["Continue"]
        document.querySelector('#auto').innerHTML = data["Auto-renewable. Cancel anytime."]
        document.querySelector('#terms').innerHTML = data["Terms of Use"]
        document.querySelector('#privacy').innerHTML = data["Privacy Policy"]
        if(language==='fr'){
            document.querySelector('#UnlimitedAccess').style.fontSize = '26px'
            document.querySelector('#Monthly').style.fontSize = '14px'
            document.querySelector('#Annually').style.fontSize = '14px'
            document.querySelector('#freeDay').style.fontSize = '13px'
            document.querySelector('#popular').style.fontSize = '13px'
        }
        if(language==='ja'){
            document.querySelector('#UnlimitedAccess').style.fontSize = '26px'
            document.querySelector('.card-container').style.marginTop = '20px'
        }
        if(language==='ru'){
            document.querySelector('#UnlimitedAccess').style.fontSize = '26px'
            document.querySelector('#freeDay').style.fontSize = '13px'
            document.querySelector('#popular').style.fontSize = '13px'
        }
        if(language==='es'){
            document.querySelector('#UnlimitedAccess').style.fontSize = '26px'
        }

    })
    .catch(error => console.error(error));