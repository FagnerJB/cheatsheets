# HTTP Response Status Codes

| Code    | Name                                   | Description | WordPress                                  |
| ------- | -------------------------------------- | ----------- | ------------------------------------------ |
|         | **Informationals**                     |             |                                            |
| **100** | Continue                               | -           | `WP_Http::HTTP_CONTINUE`                   |
| **101** | Switching protocols                    | -           | `WP_Http::SWITCHING_PROTOCOLS`             |
| **102** | Processing                             | -           | `WP_Http::PROCESSING`                      |
| **103** | Early Hints                            | -           | `WP_Http::EARLY_HINTS`                     |
|         | **Succesfuls**                         |             |                                            |
| **200** | OK                                     | -           | `WP_Http::OK`                              |
| **201** | Created                                | -           | `WP_Http::CREATED`                         |
| **202** | Accepted                               | -           | `WP_Http::ACCEPTED`                        |
| **203** | Non-Authoritative Information          | -           | `WP_Http::NON_AUTHORITATIVE_INFORMATION`   |
| **204** | No Content                             | -           | `WP_Http::NO_CONTENT`                      |
| **205** | Reset Content                          | -           | `WP_Http::RESET_CONTENT`                   |
| **206** | Partial Content                        | -           | `WP_Http::PARTIAL_CONTENT`                 |
| **207** | Multi-Status                           | -           | `WP_Http::MULTI_STATUS`                    |
| **208** | Already Reported                       | -           |                                            |
| **226** | IM Used                                | -           | `WP_Http::IM_USED`                         |
|         | **Redirection**                        |             |                                            |
| **300** | Multiple Choices                       | -           | `WP_Http::MULTIPLE_CHOICES`                |
| **301** | Moved Permanently                      | -           | `WP_Http::MOVED_PERMANENTLY`               |
| **302** | Found (Previously "Moved Temporarily") | -           | `WP_Http::FOUND`                           |
| **303** | See Other                              | -           | `WP_Http::SEE_OTHER`                       |
| **304** | Not Modified                           | -           | `WP_Http::NOT_MODIFIED`                    |
| **305** | Use Proxy                              | -           | `WP_Http::USE_PROXY`                       |
| **306** | Switch Proxy                           | -           | `WP_Http::RESERVED`                        |
| **307** | Temporary Redirect                     | -           | `WP_Http::TEMPORARY_REDIRECT`              |
| **308** | Permanent Redirect                     | -           | `WP_Http::PERMANENT_REDIRECT`              |
|         | **Client Errors**                      |             |                                            |
| **400** | Bad Request                            | -           | `WP_Http::BAD_REQUEST`                     |
| **401** | Unauthorized                           | -           | `WP_Http::UNAUTHORIZED`                    |
| **402** | Payment Required                       | -           | `WP_Http::PAYMENT_REQUIRED`                |
| **403** | Forbidden                              | -           | `WP_Http::FORBIDDEN`                       |
| **404** | Not Found                              | -           | `WP_Http::NOT_FOUND`                       |
| **405** | Method Not Allowed                     | -           | `WP_Http::METHOD_NOT_ALLOWED`              |
| **406** | Not Acceptable                         | -           | `WP_Http::NOT_ACCEPTABLE`                  |
| **407** | Proxy Authentication Required          | -           | `WP_Http::PROXY_AUTHENTICATION_REQUIRED`   |
| **408** | Request Timeout                        | -           | `WP_Http::REQUEST_TIMEOUT`                 |
| **409** | Conflict                               | -           | `WP_Http::CONFLICT`                        |
| **410** | Gone                                   | -           | `WP_Http::GONE`                            |
| **411** | Length Required                        | -           | `WP_Http::LENGTH_REQUIRED`                 |
| **412** | Precondition Failed                    | -           | `WP_Http::PRECONDITION_FAILED`             |
| **413** | Payload Too Large                      | -           | `WP_Http::REQUEST_ENTITY_TOO_LARGE`        |
| **414** | URI Too Long                           | -           | `WP_Http::REQUEST_URI_TOO_LONG`            |
| **415** | Unsupported Media Type                 | -           | `WP_Http::UNSUPPORTED_MEDIA_TYPE`          |
| **416** | Range Not Satisfiable                  | -           | `WP_Http::REQUESTED_RANGE_NOT_SATISFIABLE` |
| **417** | Expectation Failed                     | -           | `WP_Http::EXPECTATION_FAILED`              |
| **418** | I'm a Teapot                           | -           | `WP_Http::IM_A_TEAPOT`                     |
| **421** | Misdirected Request                    | -           | `WP_Http::MISDIRECTED_REQUEST`             |
| **422** | Unprocessable Entity                   | -           | `WP_Http::UNPROCESSABLE_ENTITY`            |
| **423** | Locked                                 | -           | `WP_Http::LOCKED`                          |
| **424** | Failed Dependency                      | -           | `WP_Http::FAILED_DEPENDENCY`               |
| **425** | Too Early                              | -           | `WP_Http::TOO_EARLY`                       |
| **426** | Upgrade Required                       | -           | `WP_Http::UPGRADE_REQUIRED`                |
| **428** | Precondition Required                  | -           | `WP_Http::PRECONDITION_REQUIRED`           |
| **429** | Too Many Requests                      | -           | `WP_Http::TOO_MANY_REQUESTS`               |
| **431** | Request Header Fields Too Large        | -           | `WP_Http::REQUEST_HEADER_FIELDS_TOO_LARGE` |
| **451** | Unavailable For Legal Reasons          | -           | `WP_Http::UNAVAILABLE_FOR_LEGAL_REASONS`   |
|         | **Server Errors**                      |             |                                            |
| **500** | Internal Server Error                  | -           | `WP_Http::INTERNAL_SERVER_ERROR`           |
| **501** | Not Implemented                        | -           | `WP_Http::NOT_IMPLEMENTED`                 |
| **502** | Bad Gateway                            | -           | `WP_Http::BAD_GATEWAY`                     |
| **503** | Service Unavailable                    | -           | `WP_Http::SERVICE_UNAVAILABLE`             |
| **504** | Gateway Timeout                        | -           | `WP_Http::GATEWAY_TIMEOUT`                 |
| **505** | HTTP Version Not Supported             | -           | `WP_Http::HTTP_VERSION_NOT_SUPPORTED`      |
| **506** | Variant Also Negotiates                | -           | `WP_Http::VARIANT_ALSO_NEGOTIATES`         |
| **507** | Insufficient Storage                   | -           | `WP_Http::INSUFFICIENT_STORAGE`            |
| **508** | Loop Detected                          | -           |                                            |
| **510** | Not Extended                           | -           | `WP_Http::NOT_EXTENDED`                    |
| **511** | Network Authentication Required        | -           | `WP_Http::NETWORK_AUTHENTICATION_REQUIRED` |

## Others references

-  [Apache](https://hc.apache.org/httpclient-legacy/apidocs/org/apache/commons/httpclient/HttpStatus.html)
-  [Node](https://www.npmjs.com/package/http-status-codes)
