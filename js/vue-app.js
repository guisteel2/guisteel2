var vue = new Vue({
    el : "#app",
  
    data : {
      error : {name : "*", email : "*", message : "*", rg : "*", cpf : "*", telefone : "*", celular : "*", endereco : "*"},
      contact : { name : "", email : "", message : ""},
      form1 : { name:"", email : "", rg : "", cpf : "", telefone : "", celular : "", endereco : ""},
      form2 : { name:"", email : "", cnpj : "", telefone : "", celular : "", endereco : ""},
      urlPost : "Sua URL Para consumir axios",
      disabledButton : false,
      messageResult : ""
    },
    methods : {
      Send : function(n){

        switch (n) {
          case 0:
            if(this.ValidateForm()){
              vue.ResetForm(0);
              vue.ResetError();
              vue.messageResult  = "mensagem enviada com sucesso";
            }
            break;
          case 1:
            if(this.ValidateForm1()){
              vue.ResetForm(1);
              vue.ResetError();
              vue.messageResult  = "Form Fisico enviada com sucesso";
            }
            break;
          case 2:
            if(this.ValidateForm2()){
              vue.ResetForm(2);
              vue.ResetError();
              vue.messageResult  = "Form Juridico enviada com sucesso";
            }
            break;
          default:
            vue.ResetForm();
            vue.ResetError();
            vue.messageResult  = "mensagem enviada com sucesso";
            break;
        }
      },
      formData : function(obj){
        var formData = new FormData();
        for(var key in obj){
          formData.append(key, obj[key]);
        }
        return formData;
      },
      ValidateForm : function(){
        var error = 0;
        this.ResetError();
        if(this.contact.name.length < 4){
          this.error.name = "Digite 4 caracteres";
          error++;
        }
  
        if(this.contact.email.indexOf("@") < 0){
          this.error.email = "invalido";
          error++;
        }

        if(this.contact.message.length < 4){
          this.error.message = "messagem requer 10 caracteres";
          error++;
        }
        return (error === 0);
      },
      ValidateForm1 : function(){
        var error = 0;
        this.ResetError();

        if(this.form1.name.length < 4){
          this.error.name = "Digite 4 caracteres";
          error++;
        }
  
        if(this.form1.email.indexOf("@") < 0){
          this.error.email = "invalido";
          error++;
        }

        if(this.form1.rg.length < 8){
          this.error.rg = " requer 8 numeros";
          error++;
        }

        if(this.form1.cpf.length < 11){
          this.error.cpf = " requer 11 numeros";
          error++;
        }

        if(this.form1.endereco.length < 5){
          this.error.endereco = " requer 5 caracteres";
          error++;
        }

        return (error === 0);
      },
      ValidateForm2 : function(){
        var error = 0;
        this.ResetError();
        if(this.form2.name.length < 4){
          this.error.name = "Digite 4 caracteres";
          error++;
        }
  
        if(this.form2.email.indexOf("@") < 0){
          this.error.email = "invalido";
          error++;
        }

        if(this.form2.cnpj.length < 11){
          this.error.cnpj = " requer 11 numeros";
          error++;
        }
        
        if(this.form2.telefone.length < 11){
          this.error.telefone = " requer 11 numeros";
          error++;
        }

        if(this.form2.celular.length < 11){
          this.error.celular = " requer 11 numeros";
          error++;
        }

        if(this.form2.endereco.length < 4 ){
          this.error.endereco = " requer 4 caracteres";
          error++;
        }

        return (error === 0);
      },
      ResetForm : function(n){
        if(n == 0){
          this.contact.name = "";
          this.contact.email = "";
          this.contact.subject = "";
          this.contact.message = "";
        }else if(n == 1){
          this.form1.name = "";
          this.form1.email = "";
          this.form1.rg = "";
          this.form1.cpf = "";
          this.form1.telefone = "";
          this.form1.celular = "";
          this.form1.endereco = "";
        }else if(n == 2){
          this.form1.name = "";
          this.form1.email = "";
          this.form1.cnpj = "";
          this.form1.telefone = "";
          this.form1.celular = "";
          this.form1.endereco = "";
        }
        
      },
      ResetError : function(){
        this.error.name = "";
        this.error.email = "";
        this.error.subject = "";
        this.error.rg = "";
        this.error.cpf = "";
        this.error.cnpj = "";
        this.error.telefone = "";
        this.error.celular = "";
        this.error.endereco = "";
        this.messageResult = "";
        
      },
      OpenForm : function(show){

        switch (show) {
          case 1:
            this.ResetForm(1);
            this.ResetError();
            $("#dvForm").show("slow");
            $("#dvForm1").hide("slow");
            break;
          case 2:
            this.ResetForm(2);
            this.ResetError();
            $("#dvForm1").show("slow");
            $("#dvForm").hide("slow");
            break;
          default:
            this.ResetForm();
            this.ResetError();
            $("#dvForm").hide("slow");
            $("#dvForm1").hide("slow");
        }
      },
      Forms : function(n){
        switch (n) {
          case 1:
            this.ResetForm(1);
            this.ResetError();
            $("#fisico").show("slow");
            $("#juridico").hide("slow");
            break;
          case 2:
            this.ResetForm(2);
            this.ResetError();
            $("#juridico").show("slow");
            $("#fisico").hide("slow");
            break;
          default:
            alert('....');
        }
      }
    }
  });