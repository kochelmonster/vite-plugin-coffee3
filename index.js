import {compile} from "coffeescript";

export function coffee(options) {
    return {
        name: 'coffee',
        transform: function(src, id) {
            if (/\.coffee$/.test(id)) {
                const {js, v3SourceMap} = compile(src, {
                    filename: id,
                    ...options
                });
                return {
                    code: js,
                    map: v3SourceMap
                }
            }
        }
    }
 }
