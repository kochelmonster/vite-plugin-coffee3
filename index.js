import {compile} from "coffeescript";

export function coffee(options) {
    return {
        name: 'coffee',
        transform: function(src, id) {
            if (/\.coffee$/.test(id)) {
                const result = compile(src, {
                    filename: id,
                    ...options
                });
                if (result.js) {
                    return {
                        code: result.js,
                        map: result.v3SourceMap
                    }
                }
                else {
                    return {
                        code: result
                    }
                }
            }
        }
    }
 }
