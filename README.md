# request_trimmer
While working with strings I often forget to trim some of the strings and It shoots me in my foot later on. I generally have to trim all strings that come with request body and query parameters. What if we have some utility which will do all trimming of strings sitting deep down in a object for us. Say hello to request_trimmer :smile:

request_trimmer provides you 4 express middlewares: 
 - trim_all
 - trim_body
 - trim_query
 - trim_params  

And one utility function:
- trim_util : This utility function can be used to trim any object. I generally use it when I receive data from some external apis.


## Installation

Use the package manager npm to install the package

```bash
npm i request_trimmer
```

## Usage

Javascript
```node
const express =  require('express');
const app = express();

const { trim_all,trim_body,trim_params,trim_util } = require('request_trimmer');
app.use(express.json());
```
```node
# trim request body and query.
app.use(trim_all)
```
```node
# trim request body and query
app.use(trim_all)
```
Remember params are yet not available to the middleware so trim_all won't trim req.params.

```node
//trim request body,query and params
app.post("\posts\:id",trim_all,(req,res) => {...});
```
we are using trim_all after route match so req.params are now available. This will trim request body,query and params.
But any middleware running before the route match still gets untrimmed request.
## Example
Request body  ( Before request_trimmer )
```json
{
    "arg1":{
        "arg2": [
            {
                "arg3": " val3 ",
                "arg4": "   val4 "
            }
        ]
    },
    "arg5": " val5  "
}
```
Request body( After request_trimmer )

```json
{
    "arg1": {
        "arg2": [
            {
                "arg3": "val3",
                "arg4": "val4."
            }
        ]
    },
    "arg5": "val5"
}
```

## Contributing
Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.



## License
[MIT](https://github.com/ankitaabad/request_trimmer/blob/master/LICENSE)
