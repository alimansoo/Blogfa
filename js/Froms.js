export class FromClass{
    forms =
        {
        'newArticle': {
            'validate':{
                title:{
                    length: {
                        minimum: 20,maximum: 200,type: "string"
                    }
                },
                userId:{
                    numericality: true
                },
                body:{
                    length: {
                        minimum: 50, maximum: 500, type: "string"
                    }
                }
            },
            'success':'مقاله شما ثبت شد',
            'failure':'ثبت مقاله با خطا روبرو است',
        },
        'editArticle':{
            'validate':{

            },
            'success':'Article Added',
            'failure':'fail to Add Article',
        }
    };
    validate;
    success;
    failure;
    constructor(FromId){
        this.validate = this.forms[FromId].validate;
        this.success = this.forms[FromId].success;
        this.failure = this.forms[FromId].failure;
    }
    Validation(data){
        let Result;
        validate.async(data, this.validate).then(
            (attributes)=>{
                Result = 1;
        },
            (errors) => {
                Result = errors;
            }
        );
        return Result;
    }
}