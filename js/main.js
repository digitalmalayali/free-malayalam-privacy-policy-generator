/*  
    സ്വതന്ത്ര സ്വകാര്യതാനയം ജനറേറ്റർ: നിങ്ങളുടെ വെബ്സൈറ്റിന് മലയാളത്തിൽ 
    സ്വകാര്യതാനയം ജനറേറ്റ് ചെയ്യാൻ വേണ്ടിയുള്ള സൗജന്യ വെബ് ആപ്പ്
    
    പകർപ്പവകാശം 2022 ഡിജിറ്റൽ മലയാളി, നിഷാന്ത് ശ്രീവാസ്തവ
    
    ഇതൊരു സൗജന്യ സോഫ്റ്റ്‌വെയറാണ്: ഫ്രീ സോഫ്റ്റ്‌വെയർ ഫൗണ്ടേഷൻ പ്രസിദ്ധീകരിച്ച 
    ഗ്നു ജനറൽ പബ്ലിക് ലൈസൻസ്, ഒന്നുകിൽ ലൈസൻസിന്റെ പതിപ്പ് 3 അല്ലെങ്കിൽ 
    (നിങ്ങൾക്ക് ഉചിതമായ) ഏതെങ്കിലും പുതിയ പതിപ്പിന്റെ നിബന്ധനകൾക്ക് കീഴിൽ 
    നിങ്ങൾക്കത് പുനഃവിതരണം നടത്തുകയോ മാറ്റങ്ങൾ വരുത്തുകയോ ചെയ്യാം.
    
    ഈ പ്രോഗ്രാം വിതരണം ചെയ്തിരിക്കുന്നത് ഉപകാരപ്രദമാകുമെന്ന് പ്രതീക്ഷയിലാണ്, എന്നാൽ 
    യാതൊരുവിധ വാറന്റികളുമില്ല; ഒരു പ്രത്യേക ആവശ്യത്തിനു ഉതകുമെന്ന് സൂചിപ്പിക്കുന്ന 
    വാറന്റി പോലുമില്ല. കൂടുതൽ വിവരങ്ങൾക്ക് ഗ്നു ജനറൽ പബ്ലിക് ലൈസൻസ് നോക്കുക.
    
    ഗ്നു ജനറൽ പബ്ലിക് ലൈസൻസിന്റെ ഒരു പകർപ്പ് നിങ്ങൾക്ക് ഈ പ്രോഗ്രാമിന്റെയൊപ്പം 
    ലഭിച്ചിട്ടുണ്ടാകും. ഇല്ലെങ്കിൽ, നോക്കുക <https://www.gnu.org/licenses/>.
 */

var app = new Vue({
  el: "#app",
  data: {
    iOrWe: "[ഞാൻ/ഞങ്ങൾ]",
    typeOfDev: "",
    webName: "",
    siteURL: "",
    webContact: "",
    myOrOur: "[എന്റെ/ഞങ്ങളുടെ]",
    meOrUs: "[എനിക്ക്/ഞങ്ങൾക്ക്]",
    meOrUs2: "[എന്നെ/ഞങ്ങളെ]",
    meOrUs3: "[എന്നിൽ/ഞങ്ങളിൽ]",
    devName: "",
    companyName: "",
    companyAdd: "",
    companyAddIn: "",
    devOrCompanyName: "[ഡെവലപ്പർ/കമ്പനിയുടെ പേര്]",
    effectiveFromDate: new Date().toISOString().slice(0, 10),
    thirdPartyServices: thirdPartyServicesJsonArray,
    showPrivacyModal: false,
    showDisclaimerModal: false,
    hasThirdPartyServicesSelected: true,
    contentRenderType: 1,
    wizardStep: 1,
    totalWizardSteps: 3,
  },
  methods: {
    preview: function (id) {
      this.contentRenderType = 1
    },
    nextStep: function () {
      if (this.wizardStep <= this.totalWizardSteps) {
        if (this.wizardStep == 1) {
          if (this.webName.length == 0 || this.webName == "" || this.webName == null || this.webName == "ദയവായി വെബ്സൈറ്റിന്റെ പേര് നൽകുക!") {
            this.webName = "ദയവായി വെബ്സൈറ്റിന്റെ പേര് നൽകുക!"
            return
          }

          if (this.webContact.length == 0 || this.webContact == "" || this.webContact == null || this.webContact == "ദയവായി ബന്ധപ്പെടാനുള്ള ഇമെയിൽ നൽകുക!") {
            this.webContact = "ദയവായി ബന്ധപ്പെടാനുള്ള ഇമെയിൽ നൽകുക!"
            return
          }

          if (this.siteURL.length == 0 || this.siteURL == "" || this.siteURL == null || this.siteURL == "ദയവായി വെബ്സൈറ്റ് യു.ആർ.എൽ. നൽകുക!") {
            this.siteURL = "ദയവായി വെബ്സൈറ്റ് യു.ആർ.എൽ. നൽകുക!"
            return
          }
        }

        this.wizardStep += 1
      }
    },
    prevStep: function () {
      if (this.wizardStep >= 1) {
        this.wizardStep -= 1
      }
    },
    checkForThirdPartyServicesEnabled: function () {
      let listOfEnabledThirdPartyServices = []
      this.thirdPartyServices.forEach((item) => {
        if (item[item.model] == true) {
          listOfEnabledThirdPartyServices.push(true)
        }
      })

      return listOfEnabledThirdPartyServices.length > 0
    },
    toggleState: function (item) {
      let state = item.model

      // console.log('Item:', item.name, item.model, item[state])
      // For reactive update of the json
      // Toggle the state
      Vue.set(thirdPartyServicesJsonArray, item.model, !item[state])
    },
    getHtml: function (id, target) {
      let content = getContent(id)
      let title = getTitle(id)
      let rawHTML = getRawHTML(content, title)
      this.contentRenderType = 2
      loadInTextView(target, rawHTML)
    },
    getMarkdown: function (id, target) {
      let content = getContent(id)
      let title = getTitle(id)
      let rawHTML = getRawHTML(content, title)
      let markdown = convertHtmlToMd(rawHTML)
      this.contentRenderType = 2
      loadInTextView(target, markdown)
    },
    generate: function () {
      if (this.typeOfDev === "വ്യക്തി") {
        this.devOrCompanyName = this.devName
        this.iOrWe = "ഞാൻ"
        this.myOrOur = "എന്റെ"
        this.meOrUs = "എനിക്ക്"
        this.meOrUs2 = "എന്നെ"
        this.meOrUs3 = "എന്നിൽ"
      } else if (this.typeOfDev === "കമ്പനി") {
        this.devOrCompanyName = this.companyName
        this.iOrWe = "ഞങ്ങൾ"
        this.myOrOur = "ഞങ്ങളുടെ"
        this.meOrUs = "ഞങ്ങൾക്ക്"
        this.meOrUs2 = "ഞങ്ങളെ"
        this.meOrUs3 = "ഞങ്ങളിൽ"
      }

      if (this.companyAdd === "") {
        this.companyAddIn = ""
      } else {
        this.companyAddIn = "ഞങ്ങളുടെ വിലാസം: " + this.companyAdd
      }
    },
    togglePrivacyModalVisibility: function () {
      this.generate()
      this.hasThirdPartyServicesSelected = this.checkForThirdPartyServicesEnabled()
      this.contentRenderType = 1
      this.showPrivacyModal = !this.showPrivacyModal
    },
    toggleDisclaimerModalVisibility: function () {
      this.showDisclaimerModal = !this.showDisclaimerModal
    },
  },
})
