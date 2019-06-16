# headCalc training

Happy cloning and forking!

## Example configuration for nginx reverse proxy

```
server {
    listen        80;
    listen        [::]:80;
    server_name   $FQDN;
    access_log    $PATH_TO_ACCESSLOG main;
    rewrite       ^   https://$server_name$request_uri? permanent;
}

server {
    listen        443 ssl http2;
    listen        [::]:443 ssl http2;
    server_name   $FQDN;
    access_log    $PATH_TO_ACCESSLOG main;

    ssl                                   on;
    ssl_certificate                       $PATH_TO_SSL_KEYCHAIN;
    ssl_certificate_key                   $PATH_TO_SSL_PRIVATEKEY;

    add_header Strict-Transport-Security  "max-age=31536000; includeSubDomains;";

    etag off;
    add_header Pragma "public";
    add_header Cache-Control "public";

    brotli on;
    brotli_types text/css text/x-component application/x-javascript application/javascript text/javascript text/x-js text/richtext image/svg+xml text/plain text/xsd text/xsl text/xml image/x-icon application/octet-stream;

    gzip on;
    gzip_types text/css text/x-component application/x-javascript application/javascript text/javascript text/x-js text/richtext image/svg+xml text/plain text/xsd text/xsl text/xml image/x-icon application/octet-stream;

    expires max;

    location /panf_live/ {
      proxy_http_version        1.1;

      proxy_set_header          Upgrade                 $http_upgrade;
      proxy_set_header          Connection              "upgrade";

      proxy_pass                http://127.0.0.1:$PORT/socket.io/;
    }

    location /api/ {
      proxy_set_header          X-Real-IP               $remote_addr;
      proxy_set_header          X-Forwarded-For         $proxy_add_x_forwarded_for;
      proxy_set_header          X-Forwarded-Proto       $scheme;
      proxy_pass_header         Set-Cookie;
      proxy_set_header          Host                    $http_host;

      proxy_pass                http://127.0.0.1:$PORT/;
      proxy_buffering           off;

      proxy_redirect            off;
    }

    location / {
        alias $PATH_TO_PROJECT/syncOrder/frontend/dist;
    }

    location /panf {
        alias $PATH_TO_PROJECT/syncOrder/frontend/dist;
    }

    location /js {
        alias $PATH_TO_PROJECT/syncOrder/frontend/dist/js;
    }

    location /css {
        alias $PATH_TO_PROJECT/syncOrder/frontend/dist/css;
    }

    location /img {
        alias $PATH_TO_PROJECT/syncOrder/frontend/dist/img;
    }
}

```
