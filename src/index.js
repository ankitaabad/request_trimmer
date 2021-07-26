const trim_string = (input) =>{
    if(typeof input === 'string')
        return input.trim();
    if(input !== null && typeof input === 'object'){
        Object.keys(input).forEach((key) =>{
            input[key] = trim_string(input[key]);
        });
    }
    return input;
}

const trimmer = (fields) => {  
    return (req,res,next) =>{
        fields.forEach((field) => {
            if(req[field]){
                req[field] =trim_string(req[field]);
            }
        });
        next();
    };
}
module.exports = {
    trim_all:trimmer(["body","params","query"]),
    trim_query: trimmer(["query"]),
    trim_body:trimmer(["body"]),
    trim_params:trimmer(["params"]),
    trim_util:trim_string
};

