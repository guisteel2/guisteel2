var vue = new Vue({
    el : "#app",
  
    data : {
      error : {name : "*", email : "*", message : "*"},
      contact : { name : "", email : "", message : ""},
      urlPost : "Sua URL Para consumir axios",
      disabledButton : false,
      messageResult : ""
    },
    methods : {
      Send : function(){
        if(this.ValidateForm()){
    
          vue.ResetForm();
          vue.ResetError();
          vue.messageResult  = "mensagem enviada com sucesso";
        }

        //com axios
        // if(this.ValidateForm()){
        //   this.disabledButton = true;
        //   this.messageResult = "Enviando, por favor aguarde!";
  
        //   var form = this.formData(this.contact);
        //   axios.post(this.urlPost, form).then(function(response){
        //     console.log(response.data);
        //     if(response.data == "send"){
        //       vue.ResetForm();
        //       vue.ResetError();
        //       vue.messageResult  = "mensagem enviada com sucesso";
        //       vue.disabledButton = false;
        //     }else{
        //        vue.messageResult = "Não foi possível enviar sua mensagem, tente novamente mais tarde.";
        //     }
        //   });
        // }
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
      ResetForm : function(){
        this.contact.name = "";
        this.contact.email = "";
        this.contact.subject = "";
        this.contact.message = "";
      },
      ResetError : function(){
        this.error.name = "*";
        this.error.email = "*";
        this.error.subject = "*";
        this.error.message = "*";
      },
      OpenForm : function(show){
        if(show){
          $("#dvForm").show("slow");
          this.ResetForm();
          this.ResetError();
        }
        else{
          $("#dvForm").hide("slow");
        }
      }
    }
  });