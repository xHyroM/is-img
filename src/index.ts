import * as path from 'path';
import { extensions } from './utils/extensions';
import { isUrl } from './utils/is-url';
import { promisify } from 'util';
import * as http from 'http';
import * as https from 'https';

export default async (key: string): Promise<boolean> => {
    let isImage: boolean;

    if (!isUrl(key)) {
        isImage = extensions.has(path.extname(key).slice(1).toLowerCase());
    } else {
        const url = new URL(key);
        const isHttps = url.protocol === 'https:';

        const request: any = isHttps ? promisify(https.get) : promisify(http.get);

        isImage = await (await request(url.toString()).catch(e => e)).headers['content-type'].search(/^image\//) !== -1;
    }

    return isImage;
};
