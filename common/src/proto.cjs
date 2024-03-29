/*eslint-disable block-scoped-var, id-length, no-control-regex, no-magic-numbers, no-prototype-builtins, no-redeclare, no-shadow, no-var, sort-vars*/
(function(global, factory) { /* global define, require, module */

    /* AMD */ if (typeof define === 'function' && define.amd)
        define(["protobufjs/minimal"], factory);

    /* CommonJS */ else if (typeof require === 'function' && typeof module === 'object' && module && module.exports)
        module.exports = factory(require("protobufjs/minimal"));

})(this, function($protobuf) {
    "use strict";

    // Common aliases
    var $Reader = $protobuf.Reader, $Writer = $protobuf.Writer, $util = $protobuf.util;
    
    // Exported root namespace
    var $root = $protobuf.roots["default"] || ($protobuf.roots["default"] = {});
    
    $root.main = (function() {
    
        /**
         * Namespace main.
         * @exports main
         * @namespace
         */
        var main = {};
    
        main.AccountPrivate = (function() {
    
            /**
             * Properties of an AccountPrivate.
             * @memberof main
             * @interface IAccountPrivate
             * @property {string|null} [id] AccountPrivate id
             * @property {string|null} [student_account_id] AccountPrivate student_account_id
             * @property {string|null} [xrp_seed] AccountPrivate xrp_seed
             * @property {string|null} [email] AccountPrivate email
             */
    
            /**
             * Constructs a new AccountPrivate.
             * @memberof main
             * @classdesc Represents an AccountPrivate.
             * @implements IAccountPrivate
             * @constructor
             * @param {main.IAccountPrivate=} [properties] Properties to set
             */
            function AccountPrivate(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }
    
            /**
             * AccountPrivate id.
             * @member {string} id
             * @memberof main.AccountPrivate
             * @instance
             */
            AccountPrivate.prototype.id = "";
    
            /**
             * AccountPrivate student_account_id.
             * @member {string} student_account_id
             * @memberof main.AccountPrivate
             * @instance
             */
            AccountPrivate.prototype.student_account_id = "";
    
            /**
             * AccountPrivate xrp_seed.
             * @member {string} xrp_seed
             * @memberof main.AccountPrivate
             * @instance
             */
            AccountPrivate.prototype.xrp_seed = "";
    
            /**
             * AccountPrivate email.
             * @member {string} email
             * @memberof main.AccountPrivate
             * @instance
             */
            AccountPrivate.prototype.email = "";
    
            /**
             * Encodes the specified AccountPrivate message. Does not implicitly {@link main.AccountPrivate.verify|verify} messages.
             * @function encode
             * @memberof main.AccountPrivate
             * @static
             * @param {main.IAccountPrivate} message AccountPrivate message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            AccountPrivate.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.id != null && Object.hasOwnProperty.call(message, "id"))
                    writer.uint32(/* id 1, wireType 2 =*/10).string(message.id);
                if (message.student_account_id != null && Object.hasOwnProperty.call(message, "student_account_id"))
                    writer.uint32(/* id 2, wireType 2 =*/18).string(message.student_account_id);
                if (message.xrp_seed != null && Object.hasOwnProperty.call(message, "xrp_seed"))
                    writer.uint32(/* id 3, wireType 2 =*/26).string(message.xrp_seed);
                if (message.email != null && Object.hasOwnProperty.call(message, "email"))
                    writer.uint32(/* id 4, wireType 2 =*/34).string(message.email);
                return writer;
            };
    
            /**
             * Encodes the specified AccountPrivate message, length delimited. Does not implicitly {@link main.AccountPrivate.verify|verify} messages.
             * @function encodeDelimited
             * @memberof main.AccountPrivate
             * @static
             * @param {main.IAccountPrivate} message AccountPrivate message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            AccountPrivate.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };
    
            /**
             * Decodes an AccountPrivate message from the specified reader or buffer.
             * @function decode
             * @memberof main.AccountPrivate
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {main.AccountPrivate} AccountPrivate
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            AccountPrivate.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.main.AccountPrivate();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1:
                        message.id = reader.string();
                        break;
                    case 2:
                        message.student_account_id = reader.string();
                        break;
                    case 3:
                        message.xrp_seed = reader.string();
                        break;
                    case 4:
                        message.email = reader.string();
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };
    
            /**
             * Decodes an AccountPrivate message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof main.AccountPrivate
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {main.AccountPrivate} AccountPrivate
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            AccountPrivate.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };
    
            /**
             * Verifies an AccountPrivate message.
             * @function verify
             * @memberof main.AccountPrivate
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            AccountPrivate.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.id != null && message.hasOwnProperty("id"))
                    if (!$util.isString(message.id))
                        return "id: string expected";
                if (message.student_account_id != null && message.hasOwnProperty("student_account_id"))
                    if (!$util.isString(message.student_account_id))
                        return "student_account_id: string expected";
                if (message.xrp_seed != null && message.hasOwnProperty("xrp_seed"))
                    if (!$util.isString(message.xrp_seed))
                        return "xrp_seed: string expected";
                if (message.email != null && message.hasOwnProperty("email"))
                    if (!$util.isString(message.email))
                        return "email: string expected";
                return null;
            };
    
            /**
             * Creates an AccountPrivate message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof main.AccountPrivate
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {main.AccountPrivate} AccountPrivate
             */
            AccountPrivate.fromObject = function fromObject(object) {
                if (object instanceof $root.main.AccountPrivate)
                    return object;
                var message = new $root.main.AccountPrivate();
                if (object.id != null)
                    message.id = String(object.id);
                if (object.student_account_id != null)
                    message.student_account_id = String(object.student_account_id);
                if (object.xrp_seed != null)
                    message.xrp_seed = String(object.xrp_seed);
                if (object.email != null)
                    message.email = String(object.email);
                return message;
            };
    
            /**
             * Creates a plain object from an AccountPrivate message. Also converts values to other types if specified.
             * @function toObject
             * @memberof main.AccountPrivate
             * @static
             * @param {main.AccountPrivate} message AccountPrivate
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            AccountPrivate.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (options.defaults) {
                    object.id = "";
                    object.student_account_id = "";
                    object.xrp_seed = "";
                    object.email = "";
                }
                if (message.id != null && message.hasOwnProperty("id"))
                    object.id = message.id;
                if (message.student_account_id != null && message.hasOwnProperty("student_account_id"))
                    object.student_account_id = message.student_account_id;
                if (message.xrp_seed != null && message.hasOwnProperty("xrp_seed"))
                    object.xrp_seed = message.xrp_seed;
                if (message.email != null && message.hasOwnProperty("email"))
                    object.email = message.email;
                return object;
            };
    
            /**
             * Converts this AccountPrivate to JSON.
             * @function toJSON
             * @memberof main.AccountPrivate
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            AccountPrivate.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };
    
            return AccountPrivate;
        })();
    
        main.AccountantAccount = (function() {
    
            /**
             * Properties of an AccountantAccount.
             * @memberof main
             * @interface IAccountantAccount
             * @property {string|null} [id] AccountantAccount id
             * @property {string|null} [name] AccountantAccount name
             * @property {string|null} [xrp_address] AccountantAccount xrp_address
             */
    
            /**
             * Constructs a new AccountantAccount.
             * @memberof main
             * @classdesc Represents an AccountantAccount.
             * @implements IAccountantAccount
             * @constructor
             * @param {main.IAccountantAccount=} [properties] Properties to set
             */
            function AccountantAccount(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }
    
            /**
             * AccountantAccount id.
             * @member {string} id
             * @memberof main.AccountantAccount
             * @instance
             */
            AccountantAccount.prototype.id = "";
    
            /**
             * AccountantAccount name.
             * @member {string} name
             * @memberof main.AccountantAccount
             * @instance
             */
            AccountantAccount.prototype.name = "";
    
            /**
             * AccountantAccount xrp_address.
             * @member {string} xrp_address
             * @memberof main.AccountantAccount
             * @instance
             */
            AccountantAccount.prototype.xrp_address = "";
    
            /**
             * Encodes the specified AccountantAccount message. Does not implicitly {@link main.AccountantAccount.verify|verify} messages.
             * @function encode
             * @memberof main.AccountantAccount
             * @static
             * @param {main.IAccountantAccount} message AccountantAccount message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            AccountantAccount.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.id != null && Object.hasOwnProperty.call(message, "id"))
                    writer.uint32(/* id 1, wireType 2 =*/10).string(message.id);
                if (message.name != null && Object.hasOwnProperty.call(message, "name"))
                    writer.uint32(/* id 2, wireType 2 =*/18).string(message.name);
                if (message.xrp_address != null && Object.hasOwnProperty.call(message, "xrp_address"))
                    writer.uint32(/* id 3, wireType 2 =*/26).string(message.xrp_address);
                return writer;
            };
    
            /**
             * Encodes the specified AccountantAccount message, length delimited. Does not implicitly {@link main.AccountantAccount.verify|verify} messages.
             * @function encodeDelimited
             * @memberof main.AccountantAccount
             * @static
             * @param {main.IAccountantAccount} message AccountantAccount message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            AccountantAccount.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };
    
            /**
             * Decodes an AccountantAccount message from the specified reader or buffer.
             * @function decode
             * @memberof main.AccountantAccount
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {main.AccountantAccount} AccountantAccount
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            AccountantAccount.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.main.AccountantAccount();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1:
                        message.id = reader.string();
                        break;
                    case 2:
                        message.name = reader.string();
                        break;
                    case 3:
                        message.xrp_address = reader.string();
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };
    
            /**
             * Decodes an AccountantAccount message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof main.AccountantAccount
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {main.AccountantAccount} AccountantAccount
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            AccountantAccount.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };
    
            /**
             * Verifies an AccountantAccount message.
             * @function verify
             * @memberof main.AccountantAccount
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            AccountantAccount.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.id != null && message.hasOwnProperty("id"))
                    if (!$util.isString(message.id))
                        return "id: string expected";
                if (message.name != null && message.hasOwnProperty("name"))
                    if (!$util.isString(message.name))
                        return "name: string expected";
                if (message.xrp_address != null && message.hasOwnProperty("xrp_address"))
                    if (!$util.isString(message.xrp_address))
                        return "xrp_address: string expected";
                return null;
            };
    
            /**
             * Creates an AccountantAccount message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof main.AccountantAccount
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {main.AccountantAccount} AccountantAccount
             */
            AccountantAccount.fromObject = function fromObject(object) {
                if (object instanceof $root.main.AccountantAccount)
                    return object;
                var message = new $root.main.AccountantAccount();
                if (object.id != null)
                    message.id = String(object.id);
                if (object.name != null)
                    message.name = String(object.name);
                if (object.xrp_address != null)
                    message.xrp_address = String(object.xrp_address);
                return message;
            };
    
            /**
             * Creates a plain object from an AccountantAccount message. Also converts values to other types if specified.
             * @function toObject
             * @memberof main.AccountantAccount
             * @static
             * @param {main.AccountantAccount} message AccountantAccount
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            AccountantAccount.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (options.defaults) {
                    object.id = "";
                    object.name = "";
                    object.xrp_address = "";
                }
                if (message.id != null && message.hasOwnProperty("id"))
                    object.id = message.id;
                if (message.name != null && message.hasOwnProperty("name"))
                    object.name = message.name;
                if (message.xrp_address != null && message.hasOwnProperty("xrp_address"))
                    object.xrp_address = message.xrp_address;
                return object;
            };
    
            /**
             * Converts this AccountantAccount to JSON.
             * @function toJSON
             * @memberof main.AccountantAccount
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            AccountantAccount.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };
    
            return AccountantAccount;
        })();
    
        /**
         * AccountType enum.
         * @name main.AccountType
         * @enum {number}
         * @property {number} UNKNOWN=0 UNKNOWN value
         * @property {number} ADMIN=1 ADMIN value
         * @property {number} STUDENT=2 STUDENT value
         * @property {number} ACCOUNTANT=3 ACCOUNTANT value
         */
        main.AccountType = (function() {
            var valuesById = {}, values = Object.create(valuesById);
            values[valuesById[0] = "UNKNOWN"] = 0;
            values[valuesById[1] = "ADMIN"] = 1;
            values[valuesById[2] = "STUDENT"] = 2;
            values[valuesById[3] = "ACCOUNTANT"] = 3;
            return values;
        })();
    
        main.Account = (function() {
    
            /**
             * Properties of an Account.
             * @memberof main
             * @interface IAccount
             * @property {string|null} [id] Account id
             * @property {Array.<string>|null} [user_ids] Account user_ids
             * @property {Array.<string>|null} [admin_user_ids] Account admin_user_ids
             * @property {string|null} [name] Account name
             * @property {string|null} [image_url] Account image_url
             * @property {main.AccountType|null} [type] Account type
             */
    
            /**
             * Constructs a new Account.
             * @memberof main
             * @classdesc Represents an Account.
             * @implements IAccount
             * @constructor
             * @param {main.IAccount=} [properties] Properties to set
             */
            function Account(properties) {
                this.user_ids = [];
                this.admin_user_ids = [];
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }
    
            /**
             * Account id.
             * @member {string} id
             * @memberof main.Account
             * @instance
             */
            Account.prototype.id = "";
    
            /**
             * Account user_ids.
             * @member {Array.<string>} user_ids
             * @memberof main.Account
             * @instance
             */
            Account.prototype.user_ids = $util.emptyArray;
    
            /**
             * Account admin_user_ids.
             * @member {Array.<string>} admin_user_ids
             * @memberof main.Account
             * @instance
             */
            Account.prototype.admin_user_ids = $util.emptyArray;
    
            /**
             * Account name.
             * @member {string} name
             * @memberof main.Account
             * @instance
             */
            Account.prototype.name = "";
    
            /**
             * Account image_url.
             * @member {string} image_url
             * @memberof main.Account
             * @instance
             */
            Account.prototype.image_url = "";
    
            /**
             * Account type.
             * @member {main.AccountType} type
             * @memberof main.Account
             * @instance
             */
            Account.prototype.type = 0;
    
            /**
             * Encodes the specified Account message. Does not implicitly {@link main.Account.verify|verify} messages.
             * @function encode
             * @memberof main.Account
             * @static
             * @param {main.IAccount} message Account message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            Account.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.id != null && Object.hasOwnProperty.call(message, "id"))
                    writer.uint32(/* id 1, wireType 2 =*/10).string(message.id);
                if (message.user_ids != null && message.user_ids.length)
                    for (var i = 0; i < message.user_ids.length; ++i)
                        writer.uint32(/* id 2, wireType 2 =*/18).string(message.user_ids[i]);
                if (message.admin_user_ids != null && message.admin_user_ids.length)
                    for (var i = 0; i < message.admin_user_ids.length; ++i)
                        writer.uint32(/* id 3, wireType 2 =*/26).string(message.admin_user_ids[i]);
                if (message.name != null && Object.hasOwnProperty.call(message, "name"))
                    writer.uint32(/* id 4, wireType 2 =*/34).string(message.name);
                if (message.image_url != null && Object.hasOwnProperty.call(message, "image_url"))
                    writer.uint32(/* id 5, wireType 2 =*/42).string(message.image_url);
                if (message.type != null && Object.hasOwnProperty.call(message, "type"))
                    writer.uint32(/* id 6, wireType 0 =*/48).int32(message.type);
                return writer;
            };
    
            /**
             * Encodes the specified Account message, length delimited. Does not implicitly {@link main.Account.verify|verify} messages.
             * @function encodeDelimited
             * @memberof main.Account
             * @static
             * @param {main.IAccount} message Account message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            Account.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };
    
            /**
             * Decodes an Account message from the specified reader or buffer.
             * @function decode
             * @memberof main.Account
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {main.Account} Account
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            Account.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.main.Account();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1:
                        message.id = reader.string();
                        break;
                    case 2:
                        if (!(message.user_ids && message.user_ids.length))
                            message.user_ids = [];
                        message.user_ids.push(reader.string());
                        break;
                    case 3:
                        if (!(message.admin_user_ids && message.admin_user_ids.length))
                            message.admin_user_ids = [];
                        message.admin_user_ids.push(reader.string());
                        break;
                    case 4:
                        message.name = reader.string();
                        break;
                    case 5:
                        message.image_url = reader.string();
                        break;
                    case 6:
                        message.type = reader.int32();
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };
    
            /**
             * Decodes an Account message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof main.Account
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {main.Account} Account
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            Account.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };
    
            /**
             * Verifies an Account message.
             * @function verify
             * @memberof main.Account
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            Account.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.id != null && message.hasOwnProperty("id"))
                    if (!$util.isString(message.id))
                        return "id: string expected";
                if (message.user_ids != null && message.hasOwnProperty("user_ids")) {
                    if (!Array.isArray(message.user_ids))
                        return "user_ids: array expected";
                    for (var i = 0; i < message.user_ids.length; ++i)
                        if (!$util.isString(message.user_ids[i]))
                            return "user_ids: string[] expected";
                }
                if (message.admin_user_ids != null && message.hasOwnProperty("admin_user_ids")) {
                    if (!Array.isArray(message.admin_user_ids))
                        return "admin_user_ids: array expected";
                    for (var i = 0; i < message.admin_user_ids.length; ++i)
                        if (!$util.isString(message.admin_user_ids[i]))
                            return "admin_user_ids: string[] expected";
                }
                if (message.name != null && message.hasOwnProperty("name"))
                    if (!$util.isString(message.name))
                        return "name: string expected";
                if (message.image_url != null && message.hasOwnProperty("image_url"))
                    if (!$util.isString(message.image_url))
                        return "image_url: string expected";
                if (message.type != null && message.hasOwnProperty("type"))
                    switch (message.type) {
                    default:
                        return "type: enum value expected";
                    case 0:
                    case 1:
                    case 2:
                    case 3:
                        break;
                    }
                return null;
            };
    
            /**
             * Creates an Account message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof main.Account
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {main.Account} Account
             */
            Account.fromObject = function fromObject(object) {
                if (object instanceof $root.main.Account)
                    return object;
                var message = new $root.main.Account();
                if (object.id != null)
                    message.id = String(object.id);
                if (object.user_ids) {
                    if (!Array.isArray(object.user_ids))
                        throw TypeError(".main.Account.user_ids: array expected");
                    message.user_ids = [];
                    for (var i = 0; i < object.user_ids.length; ++i)
                        message.user_ids[i] = String(object.user_ids[i]);
                }
                if (object.admin_user_ids) {
                    if (!Array.isArray(object.admin_user_ids))
                        throw TypeError(".main.Account.admin_user_ids: array expected");
                    message.admin_user_ids = [];
                    for (var i = 0; i < object.admin_user_ids.length; ++i)
                        message.admin_user_ids[i] = String(object.admin_user_ids[i]);
                }
                if (object.name != null)
                    message.name = String(object.name);
                if (object.image_url != null)
                    message.image_url = String(object.image_url);
                switch (object.type) {
                case "UNKNOWN":
                case 0:
                    message.type = 0;
                    break;
                case "ADMIN":
                case 1:
                    message.type = 1;
                    break;
                case "STUDENT":
                case 2:
                    message.type = 2;
                    break;
                case "ACCOUNTANT":
                case 3:
                    message.type = 3;
                    break;
                }
                return message;
            };
    
            /**
             * Creates a plain object from an Account message. Also converts values to other types if specified.
             * @function toObject
             * @memberof main.Account
             * @static
             * @param {main.Account} message Account
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            Account.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (options.arrays || options.defaults) {
                    object.user_ids = [];
                    object.admin_user_ids = [];
                }
                if (options.defaults) {
                    object.id = "";
                    object.name = "";
                    object.image_url = "";
                    object.type = options.enums === String ? "UNKNOWN" : 0;
                }
                if (message.id != null && message.hasOwnProperty("id"))
                    object.id = message.id;
                if (message.user_ids && message.user_ids.length) {
                    object.user_ids = [];
                    for (var j = 0; j < message.user_ids.length; ++j)
                        object.user_ids[j] = message.user_ids[j];
                }
                if (message.admin_user_ids && message.admin_user_ids.length) {
                    object.admin_user_ids = [];
                    for (var j = 0; j < message.admin_user_ids.length; ++j)
                        object.admin_user_ids[j] = message.admin_user_ids[j];
                }
                if (message.name != null && message.hasOwnProperty("name"))
                    object.name = message.name;
                if (message.image_url != null && message.hasOwnProperty("image_url"))
                    object.image_url = message.image_url;
                if (message.type != null && message.hasOwnProperty("type"))
                    object.type = options.enums === String ? $root.main.AccountType[message.type] : message.type;
                return object;
            };
    
            /**
             * Converts this Account to JSON.
             * @function toJSON
             * @memberof main.Account
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            Account.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };
    
            return Account;
        })();
    
        main.AdminAccount = (function() {
    
            /**
             * Properties of an AdminAccount.
             * @memberof main
             * @interface IAdminAccount
             * @property {string|null} [id] AdminAccount id
             * @property {string|null} [name] AdminAccount name
             * @property {string|null} [xrp_address_hot] AdminAccount xrp_address_hot
             * @property {string|null} [xrp_address_cold] AdminAccount xrp_address_cold
             * @property {string|null} [password] AdminAccount password
             */
    
            /**
             * Constructs a new AdminAccount.
             * @memberof main
             * @classdesc Represents an AdminAccount.
             * @implements IAdminAccount
             * @constructor
             * @param {main.IAdminAccount=} [properties] Properties to set
             */
            function AdminAccount(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }
    
            /**
             * AdminAccount id.
             * @member {string} id
             * @memberof main.AdminAccount
             * @instance
             */
            AdminAccount.prototype.id = "";
    
            /**
             * AdminAccount name.
             * @member {string} name
             * @memberof main.AdminAccount
             * @instance
             */
            AdminAccount.prototype.name = "";
    
            /**
             * AdminAccount xrp_address_hot.
             * @member {string} xrp_address_hot
             * @memberof main.AdminAccount
             * @instance
             */
            AdminAccount.prototype.xrp_address_hot = "";
    
            /**
             * AdminAccount xrp_address_cold.
             * @member {string} xrp_address_cold
             * @memberof main.AdminAccount
             * @instance
             */
            AdminAccount.prototype.xrp_address_cold = "";
    
            /**
             * AdminAccount password.
             * @member {string} password
             * @memberof main.AdminAccount
             * @instance
             */
            AdminAccount.prototype.password = "";
    
            /**
             * Encodes the specified AdminAccount message. Does not implicitly {@link main.AdminAccount.verify|verify} messages.
             * @function encode
             * @memberof main.AdminAccount
             * @static
             * @param {main.IAdminAccount} message AdminAccount message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            AdminAccount.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.id != null && Object.hasOwnProperty.call(message, "id"))
                    writer.uint32(/* id 1, wireType 2 =*/10).string(message.id);
                if (message.name != null && Object.hasOwnProperty.call(message, "name"))
                    writer.uint32(/* id 2, wireType 2 =*/18).string(message.name);
                if (message.xrp_address_hot != null && Object.hasOwnProperty.call(message, "xrp_address_hot"))
                    writer.uint32(/* id 3, wireType 2 =*/26).string(message.xrp_address_hot);
                if (message.xrp_address_cold != null && Object.hasOwnProperty.call(message, "xrp_address_cold"))
                    writer.uint32(/* id 4, wireType 2 =*/34).string(message.xrp_address_cold);
                if (message.password != null && Object.hasOwnProperty.call(message, "password"))
                    writer.uint32(/* id 5, wireType 2 =*/42).string(message.password);
                return writer;
            };
    
            /**
             * Encodes the specified AdminAccount message, length delimited. Does not implicitly {@link main.AdminAccount.verify|verify} messages.
             * @function encodeDelimited
             * @memberof main.AdminAccount
             * @static
             * @param {main.IAdminAccount} message AdminAccount message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            AdminAccount.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };
    
            /**
             * Decodes an AdminAccount message from the specified reader or buffer.
             * @function decode
             * @memberof main.AdminAccount
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {main.AdminAccount} AdminAccount
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            AdminAccount.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.main.AdminAccount();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1:
                        message.id = reader.string();
                        break;
                    case 2:
                        message.name = reader.string();
                        break;
                    case 3:
                        message.xrp_address_hot = reader.string();
                        break;
                    case 4:
                        message.xrp_address_cold = reader.string();
                        break;
                    case 5:
                        message.password = reader.string();
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };
    
            /**
             * Decodes an AdminAccount message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof main.AdminAccount
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {main.AdminAccount} AdminAccount
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            AdminAccount.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };
    
            /**
             * Verifies an AdminAccount message.
             * @function verify
             * @memberof main.AdminAccount
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            AdminAccount.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.id != null && message.hasOwnProperty("id"))
                    if (!$util.isString(message.id))
                        return "id: string expected";
                if (message.name != null && message.hasOwnProperty("name"))
                    if (!$util.isString(message.name))
                        return "name: string expected";
                if (message.xrp_address_hot != null && message.hasOwnProperty("xrp_address_hot"))
                    if (!$util.isString(message.xrp_address_hot))
                        return "xrp_address_hot: string expected";
                if (message.xrp_address_cold != null && message.hasOwnProperty("xrp_address_cold"))
                    if (!$util.isString(message.xrp_address_cold))
                        return "xrp_address_cold: string expected";
                if (message.password != null && message.hasOwnProperty("password"))
                    if (!$util.isString(message.password))
                        return "password: string expected";
                return null;
            };
    
            /**
             * Creates an AdminAccount message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof main.AdminAccount
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {main.AdminAccount} AdminAccount
             */
            AdminAccount.fromObject = function fromObject(object) {
                if (object instanceof $root.main.AdminAccount)
                    return object;
                var message = new $root.main.AdminAccount();
                if (object.id != null)
                    message.id = String(object.id);
                if (object.name != null)
                    message.name = String(object.name);
                if (object.xrp_address_hot != null)
                    message.xrp_address_hot = String(object.xrp_address_hot);
                if (object.xrp_address_cold != null)
                    message.xrp_address_cold = String(object.xrp_address_cold);
                if (object.password != null)
                    message.password = String(object.password);
                return message;
            };
    
            /**
             * Creates a plain object from an AdminAccount message. Also converts values to other types if specified.
             * @function toObject
             * @memberof main.AdminAccount
             * @static
             * @param {main.AdminAccount} message AdminAccount
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            AdminAccount.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (options.defaults) {
                    object.id = "";
                    object.name = "";
                    object.xrp_address_hot = "";
                    object.xrp_address_cold = "";
                    object.password = "";
                }
                if (message.id != null && message.hasOwnProperty("id"))
                    object.id = message.id;
                if (message.name != null && message.hasOwnProperty("name"))
                    object.name = message.name;
                if (message.xrp_address_hot != null && message.hasOwnProperty("xrp_address_hot"))
                    object.xrp_address_hot = message.xrp_address_hot;
                if (message.xrp_address_cold != null && message.hasOwnProperty("xrp_address_cold"))
                    object.xrp_address_cold = message.xrp_address_cold;
                if (message.password != null && message.hasOwnProperty("password"))
                    object.password = message.password;
                return object;
            };
    
            /**
             * Converts this AdminAccount to JSON.
             * @function toJSON
             * @memberof main.AdminAccount
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            AdminAccount.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };
    
            return AdminAccount;
        })();
    
        main.AdminPrivate = (function() {
    
            /**
             * Properties of an AdminPrivate.
             * @memberof main
             * @interface IAdminPrivate
             * @property {string|null} [id] AdminPrivate id
             * @property {string|null} [admin_account_id] AdminPrivate admin_account_id
             * @property {string|null} [xrp_seed_hot] AdminPrivate xrp_seed_hot
             */
    
            /**
             * Constructs a new AdminPrivate.
             * @memberof main
             * @classdesc Represents an AdminPrivate.
             * @implements IAdminPrivate
             * @constructor
             * @param {main.IAdminPrivate=} [properties] Properties to set
             */
            function AdminPrivate(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }
    
            /**
             * AdminPrivate id.
             * @member {string} id
             * @memberof main.AdminPrivate
             * @instance
             */
            AdminPrivate.prototype.id = "";
    
            /**
             * AdminPrivate admin_account_id.
             * @member {string} admin_account_id
             * @memberof main.AdminPrivate
             * @instance
             */
            AdminPrivate.prototype.admin_account_id = "";
    
            /**
             * AdminPrivate xrp_seed_hot.
             * @member {string} xrp_seed_hot
             * @memberof main.AdminPrivate
             * @instance
             */
            AdminPrivate.prototype.xrp_seed_hot = "";
    
            /**
             * Encodes the specified AdminPrivate message. Does not implicitly {@link main.AdminPrivate.verify|verify} messages.
             * @function encode
             * @memberof main.AdminPrivate
             * @static
             * @param {main.IAdminPrivate} message AdminPrivate message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            AdminPrivate.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.id != null && Object.hasOwnProperty.call(message, "id"))
                    writer.uint32(/* id 1, wireType 2 =*/10).string(message.id);
                if (message.admin_account_id != null && Object.hasOwnProperty.call(message, "admin_account_id"))
                    writer.uint32(/* id 2, wireType 2 =*/18).string(message.admin_account_id);
                if (message.xrp_seed_hot != null && Object.hasOwnProperty.call(message, "xrp_seed_hot"))
                    writer.uint32(/* id 3, wireType 2 =*/26).string(message.xrp_seed_hot);
                return writer;
            };
    
            /**
             * Encodes the specified AdminPrivate message, length delimited. Does not implicitly {@link main.AdminPrivate.verify|verify} messages.
             * @function encodeDelimited
             * @memberof main.AdminPrivate
             * @static
             * @param {main.IAdminPrivate} message AdminPrivate message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            AdminPrivate.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };
    
            /**
             * Decodes an AdminPrivate message from the specified reader or buffer.
             * @function decode
             * @memberof main.AdminPrivate
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {main.AdminPrivate} AdminPrivate
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            AdminPrivate.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.main.AdminPrivate();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1:
                        message.id = reader.string();
                        break;
                    case 2:
                        message.admin_account_id = reader.string();
                        break;
                    case 3:
                        message.xrp_seed_hot = reader.string();
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };
    
            /**
             * Decodes an AdminPrivate message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof main.AdminPrivate
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {main.AdminPrivate} AdminPrivate
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            AdminPrivate.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };
    
            /**
             * Verifies an AdminPrivate message.
             * @function verify
             * @memberof main.AdminPrivate
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            AdminPrivate.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.id != null && message.hasOwnProperty("id"))
                    if (!$util.isString(message.id))
                        return "id: string expected";
                if (message.admin_account_id != null && message.hasOwnProperty("admin_account_id"))
                    if (!$util.isString(message.admin_account_id))
                        return "admin_account_id: string expected";
                if (message.xrp_seed_hot != null && message.hasOwnProperty("xrp_seed_hot"))
                    if (!$util.isString(message.xrp_seed_hot))
                        return "xrp_seed_hot: string expected";
                return null;
            };
    
            /**
             * Creates an AdminPrivate message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof main.AdminPrivate
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {main.AdminPrivate} AdminPrivate
             */
            AdminPrivate.fromObject = function fromObject(object) {
                if (object instanceof $root.main.AdminPrivate)
                    return object;
                var message = new $root.main.AdminPrivate();
                if (object.id != null)
                    message.id = String(object.id);
                if (object.admin_account_id != null)
                    message.admin_account_id = String(object.admin_account_id);
                if (object.xrp_seed_hot != null)
                    message.xrp_seed_hot = String(object.xrp_seed_hot);
                return message;
            };
    
            /**
             * Creates a plain object from an AdminPrivate message. Also converts values to other types if specified.
             * @function toObject
             * @memberof main.AdminPrivate
             * @static
             * @param {main.AdminPrivate} message AdminPrivate
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            AdminPrivate.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (options.defaults) {
                    object.id = "";
                    object.admin_account_id = "";
                    object.xrp_seed_hot = "";
                }
                if (message.id != null && message.hasOwnProperty("id"))
                    object.id = message.id;
                if (message.admin_account_id != null && message.hasOwnProperty("admin_account_id"))
                    object.admin_account_id = message.admin_account_id;
                if (message.xrp_seed_hot != null && message.hasOwnProperty("xrp_seed_hot"))
                    object.xrp_seed_hot = message.xrp_seed_hot;
                return object;
            };
    
            /**
             * Converts this AdminPrivate to JSON.
             * @function toJSON
             * @memberof main.AdminPrivate
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            AdminPrivate.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };
    
            return AdminPrivate;
        })();
    
        main.AutoOrderChange = (function() {
    
            /**
             * Properties of an AutoOrderChange.
             * @memberof main
             * @interface IAutoOrderChange
             * @property {string|null} [id] AutoOrderChange id
             * @property {string|null} [student_account_id] AutoOrderChange student_account_id
             * @property {boolean|null} [enabled] AutoOrderChange enabled
             */
    
            /**
             * Constructs a new AutoOrderChange.
             * @memberof main
             * @classdesc Represents an AutoOrderChange.
             * @implements IAutoOrderChange
             * @constructor
             * @param {main.IAutoOrderChange=} [properties] Properties to set
             */
            function AutoOrderChange(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }
    
            /**
             * AutoOrderChange id.
             * @member {string} id
             * @memberof main.AutoOrderChange
             * @instance
             */
            AutoOrderChange.prototype.id = "";
    
            /**
             * AutoOrderChange student_account_id.
             * @member {string} student_account_id
             * @memberof main.AutoOrderChange
             * @instance
             */
            AutoOrderChange.prototype.student_account_id = "";
    
            /**
             * AutoOrderChange enabled.
             * @member {boolean} enabled
             * @memberof main.AutoOrderChange
             * @instance
             */
            AutoOrderChange.prototype.enabled = false;
    
            /**
             * Encodes the specified AutoOrderChange message. Does not implicitly {@link main.AutoOrderChange.verify|verify} messages.
             * @function encode
             * @memberof main.AutoOrderChange
             * @static
             * @param {main.IAutoOrderChange} message AutoOrderChange message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            AutoOrderChange.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.id != null && Object.hasOwnProperty.call(message, "id"))
                    writer.uint32(/* id 1, wireType 2 =*/10).string(message.id);
                if (message.student_account_id != null && Object.hasOwnProperty.call(message, "student_account_id"))
                    writer.uint32(/* id 2, wireType 2 =*/18).string(message.student_account_id);
                if (message.enabled != null && Object.hasOwnProperty.call(message, "enabled"))
                    writer.uint32(/* id 3, wireType 0 =*/24).bool(message.enabled);
                return writer;
            };
    
            /**
             * Encodes the specified AutoOrderChange message, length delimited. Does not implicitly {@link main.AutoOrderChange.verify|verify} messages.
             * @function encodeDelimited
             * @memberof main.AutoOrderChange
             * @static
             * @param {main.IAutoOrderChange} message AutoOrderChange message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            AutoOrderChange.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };
    
            /**
             * Decodes an AutoOrderChange message from the specified reader or buffer.
             * @function decode
             * @memberof main.AutoOrderChange
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {main.AutoOrderChange} AutoOrderChange
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            AutoOrderChange.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.main.AutoOrderChange();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1:
                        message.id = reader.string();
                        break;
                    case 2:
                        message.student_account_id = reader.string();
                        break;
                    case 3:
                        message.enabled = reader.bool();
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };
    
            /**
             * Decodes an AutoOrderChange message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof main.AutoOrderChange
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {main.AutoOrderChange} AutoOrderChange
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            AutoOrderChange.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };
    
            /**
             * Verifies an AutoOrderChange message.
             * @function verify
             * @memberof main.AutoOrderChange
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            AutoOrderChange.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.id != null && message.hasOwnProperty("id"))
                    if (!$util.isString(message.id))
                        return "id: string expected";
                if (message.student_account_id != null && message.hasOwnProperty("student_account_id"))
                    if (!$util.isString(message.student_account_id))
                        return "student_account_id: string expected";
                if (message.enabled != null && message.hasOwnProperty("enabled"))
                    if (typeof message.enabled !== "boolean")
                        return "enabled: boolean expected";
                return null;
            };
    
            /**
             * Creates an AutoOrderChange message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof main.AutoOrderChange
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {main.AutoOrderChange} AutoOrderChange
             */
            AutoOrderChange.fromObject = function fromObject(object) {
                if (object instanceof $root.main.AutoOrderChange)
                    return object;
                var message = new $root.main.AutoOrderChange();
                if (object.id != null)
                    message.id = String(object.id);
                if (object.student_account_id != null)
                    message.student_account_id = String(object.student_account_id);
                if (object.enabled != null)
                    message.enabled = Boolean(object.enabled);
                return message;
            };
    
            /**
             * Creates a plain object from an AutoOrderChange message. Also converts values to other types if specified.
             * @function toObject
             * @memberof main.AutoOrderChange
             * @static
             * @param {main.AutoOrderChange} message AutoOrderChange
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            AutoOrderChange.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (options.defaults) {
                    object.id = "";
                    object.student_account_id = "";
                    object.enabled = false;
                }
                if (message.id != null && message.hasOwnProperty("id"))
                    object.id = message.id;
                if (message.student_account_id != null && message.hasOwnProperty("student_account_id"))
                    object.student_account_id = message.student_account_id;
                if (message.enabled != null && message.hasOwnProperty("enabled"))
                    object.enabled = message.enabled;
                return object;
            };
    
            /**
             * Converts this AutoOrderChange to JSON.
             * @function toJSON
             * @memberof main.AutoOrderChange
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            AutoOrderChange.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };
    
            return AutoOrderChange;
        })();
    
        main.AvailableBalance = (function() {
    
            /**
             * Properties of an AvailableBalance.
             * @memberof main
             * @interface IAvailableBalance
             * @property {string|null} [id] AvailableBalance id
             * @property {string|null} [student_account_id] AvailableBalance student_account_id
             * @property {string|null} [amount_uupx] AvailableBalance amount_uupx
             * @property {string|null} [amount_uspx] AvailableBalance amount_uspx
             */
    
            /**
             * Constructs a new AvailableBalance.
             * @memberof main
             * @classdesc Represents an AvailableBalance.
             * @implements IAvailableBalance
             * @constructor
             * @param {main.IAvailableBalance=} [properties] Properties to set
             */
            function AvailableBalance(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }
    
            /**
             * AvailableBalance id.
             * @member {string} id
             * @memberof main.AvailableBalance
             * @instance
             */
            AvailableBalance.prototype.id = "";
    
            /**
             * AvailableBalance student_account_id.
             * @member {string} student_account_id
             * @memberof main.AvailableBalance
             * @instance
             */
            AvailableBalance.prototype.student_account_id = "";
    
            /**
             * AvailableBalance amount_uupx.
             * @member {string} amount_uupx
             * @memberof main.AvailableBalance
             * @instance
             */
            AvailableBalance.prototype.amount_uupx = "";
    
            /**
             * AvailableBalance amount_uspx.
             * @member {string} amount_uspx
             * @memberof main.AvailableBalance
             * @instance
             */
            AvailableBalance.prototype.amount_uspx = "";
    
            /**
             * Encodes the specified AvailableBalance message. Does not implicitly {@link main.AvailableBalance.verify|verify} messages.
             * @function encode
             * @memberof main.AvailableBalance
             * @static
             * @param {main.IAvailableBalance} message AvailableBalance message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            AvailableBalance.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.id != null && Object.hasOwnProperty.call(message, "id"))
                    writer.uint32(/* id 1, wireType 2 =*/10).string(message.id);
                if (message.student_account_id != null && Object.hasOwnProperty.call(message, "student_account_id"))
                    writer.uint32(/* id 2, wireType 2 =*/18).string(message.student_account_id);
                if (message.amount_uupx != null && Object.hasOwnProperty.call(message, "amount_uupx"))
                    writer.uint32(/* id 3, wireType 2 =*/26).string(message.amount_uupx);
                if (message.amount_uspx != null && Object.hasOwnProperty.call(message, "amount_uspx"))
                    writer.uint32(/* id 4, wireType 2 =*/34).string(message.amount_uspx);
                return writer;
            };
    
            /**
             * Encodes the specified AvailableBalance message, length delimited. Does not implicitly {@link main.AvailableBalance.verify|verify} messages.
             * @function encodeDelimited
             * @memberof main.AvailableBalance
             * @static
             * @param {main.IAvailableBalance} message AvailableBalance message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            AvailableBalance.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };
    
            /**
             * Decodes an AvailableBalance message from the specified reader or buffer.
             * @function decode
             * @memberof main.AvailableBalance
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {main.AvailableBalance} AvailableBalance
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            AvailableBalance.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.main.AvailableBalance();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1:
                        message.id = reader.string();
                        break;
                    case 2:
                        message.student_account_id = reader.string();
                        break;
                    case 3:
                        message.amount_uupx = reader.string();
                        break;
                    case 4:
                        message.amount_uspx = reader.string();
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };
    
            /**
             * Decodes an AvailableBalance message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof main.AvailableBalance
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {main.AvailableBalance} AvailableBalance
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            AvailableBalance.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };
    
            /**
             * Verifies an AvailableBalance message.
             * @function verify
             * @memberof main.AvailableBalance
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            AvailableBalance.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.id != null && message.hasOwnProperty("id"))
                    if (!$util.isString(message.id))
                        return "id: string expected";
                if (message.student_account_id != null && message.hasOwnProperty("student_account_id"))
                    if (!$util.isString(message.student_account_id))
                        return "student_account_id: string expected";
                if (message.amount_uupx != null && message.hasOwnProperty("amount_uupx"))
                    if (!$util.isString(message.amount_uupx))
                        return "amount_uupx: string expected";
                if (message.amount_uspx != null && message.hasOwnProperty("amount_uspx"))
                    if (!$util.isString(message.amount_uspx))
                        return "amount_uspx: string expected";
                return null;
            };
    
            /**
             * Creates an AvailableBalance message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof main.AvailableBalance
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {main.AvailableBalance} AvailableBalance
             */
            AvailableBalance.fromObject = function fromObject(object) {
                if (object instanceof $root.main.AvailableBalance)
                    return object;
                var message = new $root.main.AvailableBalance();
                if (object.id != null)
                    message.id = String(object.id);
                if (object.student_account_id != null)
                    message.student_account_id = String(object.student_account_id);
                if (object.amount_uupx != null)
                    message.amount_uupx = String(object.amount_uupx);
                if (object.amount_uspx != null)
                    message.amount_uspx = String(object.amount_uspx);
                return message;
            };
    
            /**
             * Creates a plain object from an AvailableBalance message. Also converts values to other types if specified.
             * @function toObject
             * @memberof main.AvailableBalance
             * @static
             * @param {main.AvailableBalance} message AvailableBalance
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            AvailableBalance.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (options.defaults) {
                    object.id = "";
                    object.student_account_id = "";
                    object.amount_uupx = "";
                    object.amount_uspx = "";
                }
                if (message.id != null && message.hasOwnProperty("id"))
                    object.id = message.id;
                if (message.student_account_id != null && message.hasOwnProperty("student_account_id"))
                    object.student_account_id = message.student_account_id;
                if (message.amount_uupx != null && message.hasOwnProperty("amount_uupx"))
                    object.amount_uupx = message.amount_uupx;
                if (message.amount_uspx != null && message.hasOwnProperty("amount_uspx"))
                    object.amount_uspx = message.amount_uspx;
                return object;
            };
    
            /**
             * Converts this AvailableBalance to JSON.
             * @function toJSON
             * @memberof main.AvailableBalance
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            AvailableBalance.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };
    
            return AvailableBalance;
        })();
    
        main.BalanceSnapshot = (function() {
    
            /**
             * Properties of a BalanceSnapshot.
             * @memberof main
             * @interface IBalanceSnapshot
             * @property {string|null} [id] BalanceSnapshot id
             * @property {string|null} [student_account_id] BalanceSnapshot student_account_id
             * @property {string|null} [amount_uupx] BalanceSnapshot amount_uupx
             * @property {string|null} [amount_uspx] BalanceSnapshot amount_uspx
             */
    
            /**
             * Constructs a new BalanceSnapshot.
             * @memberof main
             * @classdesc Represents a BalanceSnapshot.
             * @implements IBalanceSnapshot
             * @constructor
             * @param {main.IBalanceSnapshot=} [properties] Properties to set
             */
            function BalanceSnapshot(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }
    
            /**
             * BalanceSnapshot id.
             * @member {string} id
             * @memberof main.BalanceSnapshot
             * @instance
             */
            BalanceSnapshot.prototype.id = "";
    
            /**
             * BalanceSnapshot student_account_id.
             * @member {string} student_account_id
             * @memberof main.BalanceSnapshot
             * @instance
             */
            BalanceSnapshot.prototype.student_account_id = "";
    
            /**
             * BalanceSnapshot amount_uupx.
             * @member {string} amount_uupx
             * @memberof main.BalanceSnapshot
             * @instance
             */
            BalanceSnapshot.prototype.amount_uupx = "";
    
            /**
             * BalanceSnapshot amount_uspx.
             * @member {string} amount_uspx
             * @memberof main.BalanceSnapshot
             * @instance
             */
            BalanceSnapshot.prototype.amount_uspx = "";
    
            /**
             * Encodes the specified BalanceSnapshot message. Does not implicitly {@link main.BalanceSnapshot.verify|verify} messages.
             * @function encode
             * @memberof main.BalanceSnapshot
             * @static
             * @param {main.IBalanceSnapshot} message BalanceSnapshot message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            BalanceSnapshot.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.id != null && Object.hasOwnProperty.call(message, "id"))
                    writer.uint32(/* id 1, wireType 2 =*/10).string(message.id);
                if (message.student_account_id != null && Object.hasOwnProperty.call(message, "student_account_id"))
                    writer.uint32(/* id 2, wireType 2 =*/18).string(message.student_account_id);
                if (message.amount_uupx != null && Object.hasOwnProperty.call(message, "amount_uupx"))
                    writer.uint32(/* id 3, wireType 2 =*/26).string(message.amount_uupx);
                if (message.amount_uspx != null && Object.hasOwnProperty.call(message, "amount_uspx"))
                    writer.uint32(/* id 4, wireType 2 =*/34).string(message.amount_uspx);
                return writer;
            };
    
            /**
             * Encodes the specified BalanceSnapshot message, length delimited. Does not implicitly {@link main.BalanceSnapshot.verify|verify} messages.
             * @function encodeDelimited
             * @memberof main.BalanceSnapshot
             * @static
             * @param {main.IBalanceSnapshot} message BalanceSnapshot message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            BalanceSnapshot.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };
    
            /**
             * Decodes a BalanceSnapshot message from the specified reader or buffer.
             * @function decode
             * @memberof main.BalanceSnapshot
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {main.BalanceSnapshot} BalanceSnapshot
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            BalanceSnapshot.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.main.BalanceSnapshot();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1:
                        message.id = reader.string();
                        break;
                    case 2:
                        message.student_account_id = reader.string();
                        break;
                    case 3:
                        message.amount_uupx = reader.string();
                        break;
                    case 4:
                        message.amount_uspx = reader.string();
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };
    
            /**
             * Decodes a BalanceSnapshot message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof main.BalanceSnapshot
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {main.BalanceSnapshot} BalanceSnapshot
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            BalanceSnapshot.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };
    
            /**
             * Verifies a BalanceSnapshot message.
             * @function verify
             * @memberof main.BalanceSnapshot
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            BalanceSnapshot.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.id != null && message.hasOwnProperty("id"))
                    if (!$util.isString(message.id))
                        return "id: string expected";
                if (message.student_account_id != null && message.hasOwnProperty("student_account_id"))
                    if (!$util.isString(message.student_account_id))
                        return "student_account_id: string expected";
                if (message.amount_uupx != null && message.hasOwnProperty("amount_uupx"))
                    if (!$util.isString(message.amount_uupx))
                        return "amount_uupx: string expected";
                if (message.amount_uspx != null && message.hasOwnProperty("amount_uspx"))
                    if (!$util.isString(message.amount_uspx))
                        return "amount_uspx: string expected";
                return null;
            };
    
            /**
             * Creates a BalanceSnapshot message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof main.BalanceSnapshot
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {main.BalanceSnapshot} BalanceSnapshot
             */
            BalanceSnapshot.fromObject = function fromObject(object) {
                if (object instanceof $root.main.BalanceSnapshot)
                    return object;
                var message = new $root.main.BalanceSnapshot();
                if (object.id != null)
                    message.id = String(object.id);
                if (object.student_account_id != null)
                    message.student_account_id = String(object.student_account_id);
                if (object.amount_uupx != null)
                    message.amount_uupx = String(object.amount_uupx);
                if (object.amount_uspx != null)
                    message.amount_uspx = String(object.amount_uspx);
                return message;
            };
    
            /**
             * Creates a plain object from a BalanceSnapshot message. Also converts values to other types if specified.
             * @function toObject
             * @memberof main.BalanceSnapshot
             * @static
             * @param {main.BalanceSnapshot} message BalanceSnapshot
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            BalanceSnapshot.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (options.defaults) {
                    object.id = "";
                    object.student_account_id = "";
                    object.amount_uupx = "";
                    object.amount_uspx = "";
                }
                if (message.id != null && message.hasOwnProperty("id"))
                    object.id = message.id;
                if (message.student_account_id != null && message.hasOwnProperty("student_account_id"))
                    object.student_account_id = message.student_account_id;
                if (message.amount_uupx != null && message.hasOwnProperty("amount_uupx"))
                    object.amount_uupx = message.amount_uupx;
                if (message.amount_uspx != null && message.hasOwnProperty("amount_uspx"))
                    object.amount_uspx = message.amount_uspx;
                return object;
            };
    
            /**
             * Converts this BalanceSnapshot to JSON.
             * @function toJSON
             * @memberof main.BalanceSnapshot
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            BalanceSnapshot.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };
    
            return BalanceSnapshot;
        })();
    
        main.Balance = (function() {
    
            /**
             * Properties of a Balance.
             * @memberof main
             * @interface IBalance
             * @property {string|null} [id] Balance id
             * @property {string|null} [student_account_id] Balance student_account_id
             * @property {string|null} [amount_uupx] Balance amount_uupx
             * @property {string|null} [amount_uspx] Balance amount_uspx
             */
    
            /**
             * Constructs a new Balance.
             * @memberof main
             * @classdesc Represents a Balance.
             * @implements IBalance
             * @constructor
             * @param {main.IBalance=} [properties] Properties to set
             */
            function Balance(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }
    
            /**
             * Balance id.
             * @member {string} id
             * @memberof main.Balance
             * @instance
             */
            Balance.prototype.id = "";
    
            /**
             * Balance student_account_id.
             * @member {string} student_account_id
             * @memberof main.Balance
             * @instance
             */
            Balance.prototype.student_account_id = "";
    
            /**
             * Balance amount_uupx.
             * @member {string} amount_uupx
             * @memberof main.Balance
             * @instance
             */
            Balance.prototype.amount_uupx = "";
    
            /**
             * Balance amount_uspx.
             * @member {string} amount_uspx
             * @memberof main.Balance
             * @instance
             */
            Balance.prototype.amount_uspx = "";
    
            /**
             * Encodes the specified Balance message. Does not implicitly {@link main.Balance.verify|verify} messages.
             * @function encode
             * @memberof main.Balance
             * @static
             * @param {main.IBalance} message Balance message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            Balance.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.id != null && Object.hasOwnProperty.call(message, "id"))
                    writer.uint32(/* id 1, wireType 2 =*/10).string(message.id);
                if (message.student_account_id != null && Object.hasOwnProperty.call(message, "student_account_id"))
                    writer.uint32(/* id 2, wireType 2 =*/18).string(message.student_account_id);
                if (message.amount_uupx != null && Object.hasOwnProperty.call(message, "amount_uupx"))
                    writer.uint32(/* id 3, wireType 2 =*/26).string(message.amount_uupx);
                if (message.amount_uspx != null && Object.hasOwnProperty.call(message, "amount_uspx"))
                    writer.uint32(/* id 4, wireType 2 =*/34).string(message.amount_uspx);
                return writer;
            };
    
            /**
             * Encodes the specified Balance message, length delimited. Does not implicitly {@link main.Balance.verify|verify} messages.
             * @function encodeDelimited
             * @memberof main.Balance
             * @static
             * @param {main.IBalance} message Balance message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            Balance.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };
    
            /**
             * Decodes a Balance message from the specified reader or buffer.
             * @function decode
             * @memberof main.Balance
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {main.Balance} Balance
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            Balance.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.main.Balance();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1:
                        message.id = reader.string();
                        break;
                    case 2:
                        message.student_account_id = reader.string();
                        break;
                    case 3:
                        message.amount_uupx = reader.string();
                        break;
                    case 4:
                        message.amount_uspx = reader.string();
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };
    
            /**
             * Decodes a Balance message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof main.Balance
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {main.Balance} Balance
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            Balance.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };
    
            /**
             * Verifies a Balance message.
             * @function verify
             * @memberof main.Balance
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            Balance.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.id != null && message.hasOwnProperty("id"))
                    if (!$util.isString(message.id))
                        return "id: string expected";
                if (message.student_account_id != null && message.hasOwnProperty("student_account_id"))
                    if (!$util.isString(message.student_account_id))
                        return "student_account_id: string expected";
                if (message.amount_uupx != null && message.hasOwnProperty("amount_uupx"))
                    if (!$util.isString(message.amount_uupx))
                        return "amount_uupx: string expected";
                if (message.amount_uspx != null && message.hasOwnProperty("amount_uspx"))
                    if (!$util.isString(message.amount_uspx))
                        return "amount_uspx: string expected";
                return null;
            };
    
            /**
             * Creates a Balance message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof main.Balance
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {main.Balance} Balance
             */
            Balance.fromObject = function fromObject(object) {
                if (object instanceof $root.main.Balance)
                    return object;
                var message = new $root.main.Balance();
                if (object.id != null)
                    message.id = String(object.id);
                if (object.student_account_id != null)
                    message.student_account_id = String(object.student_account_id);
                if (object.amount_uupx != null)
                    message.amount_uupx = String(object.amount_uupx);
                if (object.amount_uspx != null)
                    message.amount_uspx = String(object.amount_uspx);
                return message;
            };
    
            /**
             * Creates a plain object from a Balance message. Also converts values to other types if specified.
             * @function toObject
             * @memberof main.Balance
             * @static
             * @param {main.Balance} message Balance
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            Balance.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (options.defaults) {
                    object.id = "";
                    object.student_account_id = "";
                    object.amount_uupx = "";
                    object.amount_uspx = "";
                }
                if (message.id != null && message.hasOwnProperty("id"))
                    object.id = message.id;
                if (message.student_account_id != null && message.hasOwnProperty("student_account_id"))
                    object.student_account_id = message.student_account_id;
                if (message.amount_uupx != null && message.hasOwnProperty("amount_uupx"))
                    object.amount_uupx = message.amount_uupx;
                if (message.amount_uspx != null && message.hasOwnProperty("amount_uspx"))
                    object.amount_uspx = message.amount_uspx;
                return object;
            };
    
            /**
             * Converts this Balance to JSON.
             * @function toJSON
             * @memberof main.Balance
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            Balance.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };
    
            return Balance;
        })();
    
        main.ChatDelete = (function() {
    
            /**
             * Properties of a ChatDelete.
             * @memberof main
             * @interface IChatDelete
             * @property {string|null} [id] ChatDelete id
             * @property {string|null} [chat_id] ChatDelete chat_id
             */
    
            /**
             * Constructs a new ChatDelete.
             * @memberof main
             * @classdesc Represents a ChatDelete.
             * @implements IChatDelete
             * @constructor
             * @param {main.IChatDelete=} [properties] Properties to set
             */
            function ChatDelete(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }
    
            /**
             * ChatDelete id.
             * @member {string} id
             * @memberof main.ChatDelete
             * @instance
             */
            ChatDelete.prototype.id = "";
    
            /**
             * ChatDelete chat_id.
             * @member {string} chat_id
             * @memberof main.ChatDelete
             * @instance
             */
            ChatDelete.prototype.chat_id = "";
    
            /**
             * Encodes the specified ChatDelete message. Does not implicitly {@link main.ChatDelete.verify|verify} messages.
             * @function encode
             * @memberof main.ChatDelete
             * @static
             * @param {main.IChatDelete} message ChatDelete message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            ChatDelete.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.id != null && Object.hasOwnProperty.call(message, "id"))
                    writer.uint32(/* id 1, wireType 2 =*/10).string(message.id);
                if (message.chat_id != null && Object.hasOwnProperty.call(message, "chat_id"))
                    writer.uint32(/* id 2, wireType 2 =*/18).string(message.chat_id);
                return writer;
            };
    
            /**
             * Encodes the specified ChatDelete message, length delimited. Does not implicitly {@link main.ChatDelete.verify|verify} messages.
             * @function encodeDelimited
             * @memberof main.ChatDelete
             * @static
             * @param {main.IChatDelete} message ChatDelete message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            ChatDelete.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };
    
            /**
             * Decodes a ChatDelete message from the specified reader or buffer.
             * @function decode
             * @memberof main.ChatDelete
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {main.ChatDelete} ChatDelete
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            ChatDelete.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.main.ChatDelete();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1:
                        message.id = reader.string();
                        break;
                    case 2:
                        message.chat_id = reader.string();
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };
    
            /**
             * Decodes a ChatDelete message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof main.ChatDelete
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {main.ChatDelete} ChatDelete
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            ChatDelete.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };
    
            /**
             * Verifies a ChatDelete message.
             * @function verify
             * @memberof main.ChatDelete
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            ChatDelete.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.id != null && message.hasOwnProperty("id"))
                    if (!$util.isString(message.id))
                        return "id: string expected";
                if (message.chat_id != null && message.hasOwnProperty("chat_id"))
                    if (!$util.isString(message.chat_id))
                        return "chat_id: string expected";
                return null;
            };
    
            /**
             * Creates a ChatDelete message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof main.ChatDelete
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {main.ChatDelete} ChatDelete
             */
            ChatDelete.fromObject = function fromObject(object) {
                if (object instanceof $root.main.ChatDelete)
                    return object;
                var message = new $root.main.ChatDelete();
                if (object.id != null)
                    message.id = String(object.id);
                if (object.chat_id != null)
                    message.chat_id = String(object.chat_id);
                return message;
            };
    
            /**
             * Creates a plain object from a ChatDelete message. Also converts values to other types if specified.
             * @function toObject
             * @memberof main.ChatDelete
             * @static
             * @param {main.ChatDelete} message ChatDelete
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            ChatDelete.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (options.defaults) {
                    object.id = "";
                    object.chat_id = "";
                }
                if (message.id != null && message.hasOwnProperty("id"))
                    object.id = message.id;
                if (message.chat_id != null && message.hasOwnProperty("chat_id"))
                    object.chat_id = message.chat_id;
                return object;
            };
    
            /**
             * Converts this ChatDelete to JSON.
             * @function toJSON
             * @memberof main.ChatDelete
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            ChatDelete.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };
    
            return ChatDelete;
        })();
    
        main.Chat = (function() {
    
            /**
             * Properties of a Chat.
             * @memberof main
             * @interface IChat
             * @property {string|null} [id] Chat id
             * @property {string|null} [title] Chat title
             * @property {string|null} [user1_id] Chat user1_id
             * @property {string|null} [user1_name] Chat user1_name
             * @property {string|null} [user2_id] Chat user2_id
             * @property {string|null} [user2_name] Chat user2_name
             * @property {boolean|null} [is_deleted] Chat is_deleted
             */
    
            /**
             * Constructs a new Chat.
             * @memberof main
             * @classdesc Represents a Chat.
             * @implements IChat
             * @constructor
             * @param {main.IChat=} [properties] Properties to set
             */
            function Chat(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }
    
            /**
             * Chat id.
             * @member {string} id
             * @memberof main.Chat
             * @instance
             */
            Chat.prototype.id = "";
    
            /**
             * Chat title.
             * @member {string} title
             * @memberof main.Chat
             * @instance
             */
            Chat.prototype.title = "";
    
            /**
             * Chat user1_id.
             * @member {string} user1_id
             * @memberof main.Chat
             * @instance
             */
            Chat.prototype.user1_id = "";
    
            /**
             * Chat user1_name.
             * @member {string} user1_name
             * @memberof main.Chat
             * @instance
             */
            Chat.prototype.user1_name = "";
    
            /**
             * Chat user2_id.
             * @member {string} user2_id
             * @memberof main.Chat
             * @instance
             */
            Chat.prototype.user2_id = "";
    
            /**
             * Chat user2_name.
             * @member {string} user2_name
             * @memberof main.Chat
             * @instance
             */
            Chat.prototype.user2_name = "";
    
            /**
             * Chat is_deleted.
             * @member {boolean} is_deleted
             * @memberof main.Chat
             * @instance
             */
            Chat.prototype.is_deleted = false;
    
            /**
             * Encodes the specified Chat message. Does not implicitly {@link main.Chat.verify|verify} messages.
             * @function encode
             * @memberof main.Chat
             * @static
             * @param {main.IChat} message Chat message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            Chat.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.id != null && Object.hasOwnProperty.call(message, "id"))
                    writer.uint32(/* id 1, wireType 2 =*/10).string(message.id);
                if (message.title != null && Object.hasOwnProperty.call(message, "title"))
                    writer.uint32(/* id 2, wireType 2 =*/18).string(message.title);
                if (message.user1_id != null && Object.hasOwnProperty.call(message, "user1_id"))
                    writer.uint32(/* id 3, wireType 2 =*/26).string(message.user1_id);
                if (message.user1_name != null && Object.hasOwnProperty.call(message, "user1_name"))
                    writer.uint32(/* id 4, wireType 2 =*/34).string(message.user1_name);
                if (message.user2_id != null && Object.hasOwnProperty.call(message, "user2_id"))
                    writer.uint32(/* id 5, wireType 2 =*/42).string(message.user2_id);
                if (message.user2_name != null && Object.hasOwnProperty.call(message, "user2_name"))
                    writer.uint32(/* id 6, wireType 2 =*/50).string(message.user2_name);
                if (message.is_deleted != null && Object.hasOwnProperty.call(message, "is_deleted"))
                    writer.uint32(/* id 7, wireType 0 =*/56).bool(message.is_deleted);
                return writer;
            };
    
            /**
             * Encodes the specified Chat message, length delimited. Does not implicitly {@link main.Chat.verify|verify} messages.
             * @function encodeDelimited
             * @memberof main.Chat
             * @static
             * @param {main.IChat} message Chat message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            Chat.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };
    
            /**
             * Decodes a Chat message from the specified reader or buffer.
             * @function decode
             * @memberof main.Chat
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {main.Chat} Chat
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            Chat.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.main.Chat();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1:
                        message.id = reader.string();
                        break;
                    case 2:
                        message.title = reader.string();
                        break;
                    case 3:
                        message.user1_id = reader.string();
                        break;
                    case 4:
                        message.user1_name = reader.string();
                        break;
                    case 5:
                        message.user2_id = reader.string();
                        break;
                    case 6:
                        message.user2_name = reader.string();
                        break;
                    case 7:
                        message.is_deleted = reader.bool();
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };
    
            /**
             * Decodes a Chat message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof main.Chat
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {main.Chat} Chat
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            Chat.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };
    
            /**
             * Verifies a Chat message.
             * @function verify
             * @memberof main.Chat
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            Chat.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.id != null && message.hasOwnProperty("id"))
                    if (!$util.isString(message.id))
                        return "id: string expected";
                if (message.title != null && message.hasOwnProperty("title"))
                    if (!$util.isString(message.title))
                        return "title: string expected";
                if (message.user1_id != null && message.hasOwnProperty("user1_id"))
                    if (!$util.isString(message.user1_id))
                        return "user1_id: string expected";
                if (message.user1_name != null && message.hasOwnProperty("user1_name"))
                    if (!$util.isString(message.user1_name))
                        return "user1_name: string expected";
                if (message.user2_id != null && message.hasOwnProperty("user2_id"))
                    if (!$util.isString(message.user2_id))
                        return "user2_id: string expected";
                if (message.user2_name != null && message.hasOwnProperty("user2_name"))
                    if (!$util.isString(message.user2_name))
                        return "user2_name: string expected";
                if (message.is_deleted != null && message.hasOwnProperty("is_deleted"))
                    if (typeof message.is_deleted !== "boolean")
                        return "is_deleted: boolean expected";
                return null;
            };
    
            /**
             * Creates a Chat message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof main.Chat
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {main.Chat} Chat
             */
            Chat.fromObject = function fromObject(object) {
                if (object instanceof $root.main.Chat)
                    return object;
                var message = new $root.main.Chat();
                if (object.id != null)
                    message.id = String(object.id);
                if (object.title != null)
                    message.title = String(object.title);
                if (object.user1_id != null)
                    message.user1_id = String(object.user1_id);
                if (object.user1_name != null)
                    message.user1_name = String(object.user1_name);
                if (object.user2_id != null)
                    message.user2_id = String(object.user2_id);
                if (object.user2_name != null)
                    message.user2_name = String(object.user2_name);
                if (object.is_deleted != null)
                    message.is_deleted = Boolean(object.is_deleted);
                return message;
            };
    
            /**
             * Creates a plain object from a Chat message. Also converts values to other types if specified.
             * @function toObject
             * @memberof main.Chat
             * @static
             * @param {main.Chat} message Chat
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            Chat.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (options.defaults) {
                    object.id = "";
                    object.title = "";
                    object.user1_id = "";
                    object.user1_name = "";
                    object.user2_id = "";
                    object.user2_name = "";
                    object.is_deleted = false;
                }
                if (message.id != null && message.hasOwnProperty("id"))
                    object.id = message.id;
                if (message.title != null && message.hasOwnProperty("title"))
                    object.title = message.title;
                if (message.user1_id != null && message.hasOwnProperty("user1_id"))
                    object.user1_id = message.user1_id;
                if (message.user1_name != null && message.hasOwnProperty("user1_name"))
                    object.user1_name = message.user1_name;
                if (message.user2_id != null && message.hasOwnProperty("user2_id"))
                    object.user2_id = message.user2_id;
                if (message.user2_name != null && message.hasOwnProperty("user2_name"))
                    object.user2_name = message.user2_name;
                if (message.is_deleted != null && message.hasOwnProperty("is_deleted"))
                    object.is_deleted = message.is_deleted;
                return object;
            };
    
            /**
             * Converts this Chat to JSON.
             * @function toJSON
             * @memberof main.Chat
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            Chat.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };
    
            return Chat;
        })();
    
        main.CostSetting = (function() {
    
            /**
             * Properties of a CostSetting.
             * @memberof main
             * @interface ICostSetting
             * @property {string|null} [id] CostSetting id
             * @property {string|null} [system_cost_ujpy] CostSetting system_cost_ujpy
             * @property {string|null} [electricity_cost_ujpy] CostSetting electricity_cost_ujpy
             */
    
            /**
             * Constructs a new CostSetting.
             * @memberof main
             * @classdesc Represents a CostSetting.
             * @implements ICostSetting
             * @constructor
             * @param {main.ICostSetting=} [properties] Properties to set
             */
            function CostSetting(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }
    
            /**
             * CostSetting id.
             * @member {string} id
             * @memberof main.CostSetting
             * @instance
             */
            CostSetting.prototype.id = "";
    
            /**
             * CostSetting system_cost_ujpy.
             * @member {string} system_cost_ujpy
             * @memberof main.CostSetting
             * @instance
             */
            CostSetting.prototype.system_cost_ujpy = "";
    
            /**
             * CostSetting electricity_cost_ujpy.
             * @member {string} electricity_cost_ujpy
             * @memberof main.CostSetting
             * @instance
             */
            CostSetting.prototype.electricity_cost_ujpy = "";
    
            /**
             * Encodes the specified CostSetting message. Does not implicitly {@link main.CostSetting.verify|verify} messages.
             * @function encode
             * @memberof main.CostSetting
             * @static
             * @param {main.ICostSetting} message CostSetting message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            CostSetting.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.id != null && Object.hasOwnProperty.call(message, "id"))
                    writer.uint32(/* id 1, wireType 2 =*/10).string(message.id);
                if (message.system_cost_ujpy != null && Object.hasOwnProperty.call(message, "system_cost_ujpy"))
                    writer.uint32(/* id 2, wireType 2 =*/18).string(message.system_cost_ujpy);
                if (message.electricity_cost_ujpy != null && Object.hasOwnProperty.call(message, "electricity_cost_ujpy"))
                    writer.uint32(/* id 3, wireType 2 =*/26).string(message.electricity_cost_ujpy);
                return writer;
            };
    
            /**
             * Encodes the specified CostSetting message, length delimited. Does not implicitly {@link main.CostSetting.verify|verify} messages.
             * @function encodeDelimited
             * @memberof main.CostSetting
             * @static
             * @param {main.ICostSetting} message CostSetting message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            CostSetting.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };
    
            /**
             * Decodes a CostSetting message from the specified reader or buffer.
             * @function decode
             * @memberof main.CostSetting
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {main.CostSetting} CostSetting
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            CostSetting.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.main.CostSetting();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1:
                        message.id = reader.string();
                        break;
                    case 2:
                        message.system_cost_ujpy = reader.string();
                        break;
                    case 3:
                        message.electricity_cost_ujpy = reader.string();
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };
    
            /**
             * Decodes a CostSetting message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof main.CostSetting
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {main.CostSetting} CostSetting
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            CostSetting.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };
    
            /**
             * Verifies a CostSetting message.
             * @function verify
             * @memberof main.CostSetting
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            CostSetting.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.id != null && message.hasOwnProperty("id"))
                    if (!$util.isString(message.id))
                        return "id: string expected";
                if (message.system_cost_ujpy != null && message.hasOwnProperty("system_cost_ujpy"))
                    if (!$util.isString(message.system_cost_ujpy))
                        return "system_cost_ujpy: string expected";
                if (message.electricity_cost_ujpy != null && message.hasOwnProperty("electricity_cost_ujpy"))
                    if (!$util.isString(message.electricity_cost_ujpy))
                        return "electricity_cost_ujpy: string expected";
                return null;
            };
    
            /**
             * Creates a CostSetting message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof main.CostSetting
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {main.CostSetting} CostSetting
             */
            CostSetting.fromObject = function fromObject(object) {
                if (object instanceof $root.main.CostSetting)
                    return object;
                var message = new $root.main.CostSetting();
                if (object.id != null)
                    message.id = String(object.id);
                if (object.system_cost_ujpy != null)
                    message.system_cost_ujpy = String(object.system_cost_ujpy);
                if (object.electricity_cost_ujpy != null)
                    message.electricity_cost_ujpy = String(object.electricity_cost_ujpy);
                return message;
            };
    
            /**
             * Creates a plain object from a CostSetting message. Also converts values to other types if specified.
             * @function toObject
             * @memberof main.CostSetting
             * @static
             * @param {main.CostSetting} message CostSetting
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            CostSetting.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (options.defaults) {
                    object.id = "";
                    object.system_cost_ujpy = "";
                    object.electricity_cost_ujpy = "";
                }
                if (message.id != null && message.hasOwnProperty("id"))
                    object.id = message.id;
                if (message.system_cost_ujpy != null && message.hasOwnProperty("system_cost_ujpy"))
                    object.system_cost_ujpy = message.system_cost_ujpy;
                if (message.electricity_cost_ujpy != null && message.hasOwnProperty("electricity_cost_ujpy"))
                    object.electricity_cost_ujpy = message.electricity_cost_ujpy;
                return object;
            };
    
            /**
             * Converts this CostSetting to JSON.
             * @function toJSON
             * @memberof main.CostSetting
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            CostSetting.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };
    
            return CostSetting;
        })();
    
        main.DailyPayment = (function() {
    
            /**
             * Properties of a DailyPayment.
             * @memberof main
             * @interface IDailyPayment
             * @property {string|null} [id] DailyPayment id
             * @property {string|null} [student_account_id] DailyPayment student_account_id
             * @property {string|null} [year] DailyPayment year
             * @property {string|null} [month] DailyPayment month
             * @property {string|null} [date] DailyPayment date
             * @property {string|null} [amount_mwh] DailyPayment amount_mwh
             * @property {string|null} [amount_uupx] DailyPayment amount_uupx
             * @property {string|null} [amount_uspx] DailyPayment amount_uspx
             * @property {string|null} [amount_insufficiency] DailyPayment amount_insufficiency
             */
    
            /**
             * Constructs a new DailyPayment.
             * @memberof main
             * @classdesc Represents a DailyPayment.
             * @implements IDailyPayment
             * @constructor
             * @param {main.IDailyPayment=} [properties] Properties to set
             */
            function DailyPayment(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }
    
            /**
             * DailyPayment id.
             * @member {string} id
             * @memberof main.DailyPayment
             * @instance
             */
            DailyPayment.prototype.id = "";
    
            /**
             * DailyPayment student_account_id.
             * @member {string} student_account_id
             * @memberof main.DailyPayment
             * @instance
             */
            DailyPayment.prototype.student_account_id = "";
    
            /**
             * DailyPayment year.
             * @member {string} year
             * @memberof main.DailyPayment
             * @instance
             */
            DailyPayment.prototype.year = "";
    
            /**
             * DailyPayment month.
             * @member {string} month
             * @memberof main.DailyPayment
             * @instance
             */
            DailyPayment.prototype.month = "";
    
            /**
             * DailyPayment date.
             * @member {string} date
             * @memberof main.DailyPayment
             * @instance
             */
            DailyPayment.prototype.date = "";
    
            /**
             * DailyPayment amount_mwh.
             * @member {string} amount_mwh
             * @memberof main.DailyPayment
             * @instance
             */
            DailyPayment.prototype.amount_mwh = "";
    
            /**
             * DailyPayment amount_uupx.
             * @member {string} amount_uupx
             * @memberof main.DailyPayment
             * @instance
             */
            DailyPayment.prototype.amount_uupx = "";
    
            /**
             * DailyPayment amount_uspx.
             * @member {string} amount_uspx
             * @memberof main.DailyPayment
             * @instance
             */
            DailyPayment.prototype.amount_uspx = "";
    
            /**
             * DailyPayment amount_insufficiency.
             * @member {string} amount_insufficiency
             * @memberof main.DailyPayment
             * @instance
             */
            DailyPayment.prototype.amount_insufficiency = "";
    
            /**
             * Encodes the specified DailyPayment message. Does not implicitly {@link main.DailyPayment.verify|verify} messages.
             * @function encode
             * @memberof main.DailyPayment
             * @static
             * @param {main.IDailyPayment} message DailyPayment message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            DailyPayment.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.id != null && Object.hasOwnProperty.call(message, "id"))
                    writer.uint32(/* id 1, wireType 2 =*/10).string(message.id);
                if (message.student_account_id != null && Object.hasOwnProperty.call(message, "student_account_id"))
                    writer.uint32(/* id 2, wireType 2 =*/18).string(message.student_account_id);
                if (message.year != null && Object.hasOwnProperty.call(message, "year"))
                    writer.uint32(/* id 3, wireType 2 =*/26).string(message.year);
                if (message.month != null && Object.hasOwnProperty.call(message, "month"))
                    writer.uint32(/* id 4, wireType 2 =*/34).string(message.month);
                if (message.date != null && Object.hasOwnProperty.call(message, "date"))
                    writer.uint32(/* id 5, wireType 2 =*/42).string(message.date);
                if (message.amount_mwh != null && Object.hasOwnProperty.call(message, "amount_mwh"))
                    writer.uint32(/* id 6, wireType 2 =*/50).string(message.amount_mwh);
                if (message.amount_uupx != null && Object.hasOwnProperty.call(message, "amount_uupx"))
                    writer.uint32(/* id 7, wireType 2 =*/58).string(message.amount_uupx);
                if (message.amount_uspx != null && Object.hasOwnProperty.call(message, "amount_uspx"))
                    writer.uint32(/* id 8, wireType 2 =*/66).string(message.amount_uspx);
                if (message.amount_insufficiency != null && Object.hasOwnProperty.call(message, "amount_insufficiency"))
                    writer.uint32(/* id 9, wireType 2 =*/74).string(message.amount_insufficiency);
                return writer;
            };
    
            /**
             * Encodes the specified DailyPayment message, length delimited. Does not implicitly {@link main.DailyPayment.verify|verify} messages.
             * @function encodeDelimited
             * @memberof main.DailyPayment
             * @static
             * @param {main.IDailyPayment} message DailyPayment message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            DailyPayment.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };
    
            /**
             * Decodes a DailyPayment message from the specified reader or buffer.
             * @function decode
             * @memberof main.DailyPayment
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {main.DailyPayment} DailyPayment
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            DailyPayment.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.main.DailyPayment();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1:
                        message.id = reader.string();
                        break;
                    case 2:
                        message.student_account_id = reader.string();
                        break;
                    case 3:
                        message.year = reader.string();
                        break;
                    case 4:
                        message.month = reader.string();
                        break;
                    case 5:
                        message.date = reader.string();
                        break;
                    case 6:
                        message.amount_mwh = reader.string();
                        break;
                    case 7:
                        message.amount_uupx = reader.string();
                        break;
                    case 8:
                        message.amount_uspx = reader.string();
                        break;
                    case 9:
                        message.amount_insufficiency = reader.string();
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };
    
            /**
             * Decodes a DailyPayment message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof main.DailyPayment
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {main.DailyPayment} DailyPayment
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            DailyPayment.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };
    
            /**
             * Verifies a DailyPayment message.
             * @function verify
             * @memberof main.DailyPayment
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            DailyPayment.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.id != null && message.hasOwnProperty("id"))
                    if (!$util.isString(message.id))
                        return "id: string expected";
                if (message.student_account_id != null && message.hasOwnProperty("student_account_id"))
                    if (!$util.isString(message.student_account_id))
                        return "student_account_id: string expected";
                if (message.year != null && message.hasOwnProperty("year"))
                    if (!$util.isString(message.year))
                        return "year: string expected";
                if (message.month != null && message.hasOwnProperty("month"))
                    if (!$util.isString(message.month))
                        return "month: string expected";
                if (message.date != null && message.hasOwnProperty("date"))
                    if (!$util.isString(message.date))
                        return "date: string expected";
                if (message.amount_mwh != null && message.hasOwnProperty("amount_mwh"))
                    if (!$util.isString(message.amount_mwh))
                        return "amount_mwh: string expected";
                if (message.amount_uupx != null && message.hasOwnProperty("amount_uupx"))
                    if (!$util.isString(message.amount_uupx))
                        return "amount_uupx: string expected";
                if (message.amount_uspx != null && message.hasOwnProperty("amount_uspx"))
                    if (!$util.isString(message.amount_uspx))
                        return "amount_uspx: string expected";
                if (message.amount_insufficiency != null && message.hasOwnProperty("amount_insufficiency"))
                    if (!$util.isString(message.amount_insufficiency))
                        return "amount_insufficiency: string expected";
                return null;
            };
    
            /**
             * Creates a DailyPayment message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof main.DailyPayment
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {main.DailyPayment} DailyPayment
             */
            DailyPayment.fromObject = function fromObject(object) {
                if (object instanceof $root.main.DailyPayment)
                    return object;
                var message = new $root.main.DailyPayment();
                if (object.id != null)
                    message.id = String(object.id);
                if (object.student_account_id != null)
                    message.student_account_id = String(object.student_account_id);
                if (object.year != null)
                    message.year = String(object.year);
                if (object.month != null)
                    message.month = String(object.month);
                if (object.date != null)
                    message.date = String(object.date);
                if (object.amount_mwh != null)
                    message.amount_mwh = String(object.amount_mwh);
                if (object.amount_uupx != null)
                    message.amount_uupx = String(object.amount_uupx);
                if (object.amount_uspx != null)
                    message.amount_uspx = String(object.amount_uspx);
                if (object.amount_insufficiency != null)
                    message.amount_insufficiency = String(object.amount_insufficiency);
                return message;
            };
    
            /**
             * Creates a plain object from a DailyPayment message. Also converts values to other types if specified.
             * @function toObject
             * @memberof main.DailyPayment
             * @static
             * @param {main.DailyPayment} message DailyPayment
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            DailyPayment.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (options.defaults) {
                    object.id = "";
                    object.student_account_id = "";
                    object.year = "";
                    object.month = "";
                    object.date = "";
                    object.amount_mwh = "";
                    object.amount_uupx = "";
                    object.amount_uspx = "";
                    object.amount_insufficiency = "";
                }
                if (message.id != null && message.hasOwnProperty("id"))
                    object.id = message.id;
                if (message.student_account_id != null && message.hasOwnProperty("student_account_id"))
                    object.student_account_id = message.student_account_id;
                if (message.year != null && message.hasOwnProperty("year"))
                    object.year = message.year;
                if (message.month != null && message.hasOwnProperty("month"))
                    object.month = message.month;
                if (message.date != null && message.hasOwnProperty("date"))
                    object.date = message.date;
                if (message.amount_mwh != null && message.hasOwnProperty("amount_mwh"))
                    object.amount_mwh = message.amount_mwh;
                if (message.amount_uupx != null && message.hasOwnProperty("amount_uupx"))
                    object.amount_uupx = message.amount_uupx;
                if (message.amount_uspx != null && message.hasOwnProperty("amount_uspx"))
                    object.amount_uspx = message.amount_uspx;
                if (message.amount_insufficiency != null && message.hasOwnProperty("amount_insufficiency"))
                    object.amount_insufficiency = message.amount_insufficiency;
                return object;
            };
    
            /**
             * Converts this DailyPayment to JSON.
             * @function toJSON
             * @memberof main.DailyPayment
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            DailyPayment.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };
    
            return DailyPayment;
        })();
    
        main.DailyUsage = (function() {
    
            /**
             * Properties of a DailyUsage.
             * @memberof main
             * @interface IDailyUsage
             * @property {string|null} [id] DailyUsage id
             * @property {string|null} [room_id] DailyUsage room_id
             * @property {string|null} [amount_kwh_str] DailyUsage amount_kwh_str
             */
    
            /**
             * Constructs a new DailyUsage.
             * @memberof main
             * @classdesc Represents a DailyUsage.
             * @implements IDailyUsage
             * @constructor
             * @param {main.IDailyUsage=} [properties] Properties to set
             */
            function DailyUsage(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }
    
            /**
             * DailyUsage id.
             * @member {string} id
             * @memberof main.DailyUsage
             * @instance
             */
            DailyUsage.prototype.id = "";
    
            /**
             * DailyUsage room_id.
             * @member {string} room_id
             * @memberof main.DailyUsage
             * @instance
             */
            DailyUsage.prototype.room_id = "";
    
            /**
             * DailyUsage amount_kwh_str.
             * @member {string} amount_kwh_str
             * @memberof main.DailyUsage
             * @instance
             */
            DailyUsage.prototype.amount_kwh_str = "";
    
            /**
             * Encodes the specified DailyUsage message. Does not implicitly {@link main.DailyUsage.verify|verify} messages.
             * @function encode
             * @memberof main.DailyUsage
             * @static
             * @param {main.IDailyUsage} message DailyUsage message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            DailyUsage.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.id != null && Object.hasOwnProperty.call(message, "id"))
                    writer.uint32(/* id 1, wireType 2 =*/10).string(message.id);
                if (message.room_id != null && Object.hasOwnProperty.call(message, "room_id"))
                    writer.uint32(/* id 2, wireType 2 =*/18).string(message.room_id);
                if (message.amount_kwh_str != null && Object.hasOwnProperty.call(message, "amount_kwh_str"))
                    writer.uint32(/* id 4, wireType 2 =*/34).string(message.amount_kwh_str);
                return writer;
            };
    
            /**
             * Encodes the specified DailyUsage message, length delimited. Does not implicitly {@link main.DailyUsage.verify|verify} messages.
             * @function encodeDelimited
             * @memberof main.DailyUsage
             * @static
             * @param {main.IDailyUsage} message DailyUsage message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            DailyUsage.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };
    
            /**
             * Decodes a DailyUsage message from the specified reader or buffer.
             * @function decode
             * @memberof main.DailyUsage
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {main.DailyUsage} DailyUsage
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            DailyUsage.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.main.DailyUsage();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1:
                        message.id = reader.string();
                        break;
                    case 2:
                        message.room_id = reader.string();
                        break;
                    case 4:
                        message.amount_kwh_str = reader.string();
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };
    
            /**
             * Decodes a DailyUsage message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof main.DailyUsage
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {main.DailyUsage} DailyUsage
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            DailyUsage.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };
    
            /**
             * Verifies a DailyUsage message.
             * @function verify
             * @memberof main.DailyUsage
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            DailyUsage.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.id != null && message.hasOwnProperty("id"))
                    if (!$util.isString(message.id))
                        return "id: string expected";
                if (message.room_id != null && message.hasOwnProperty("room_id"))
                    if (!$util.isString(message.room_id))
                        return "room_id: string expected";
                if (message.amount_kwh_str != null && message.hasOwnProperty("amount_kwh_str"))
                    if (!$util.isString(message.amount_kwh_str))
                        return "amount_kwh_str: string expected";
                return null;
            };
    
            /**
             * Creates a DailyUsage message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof main.DailyUsage
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {main.DailyUsage} DailyUsage
             */
            DailyUsage.fromObject = function fromObject(object) {
                if (object instanceof $root.main.DailyUsage)
                    return object;
                var message = new $root.main.DailyUsage();
                if (object.id != null)
                    message.id = String(object.id);
                if (object.room_id != null)
                    message.room_id = String(object.room_id);
                if (object.amount_kwh_str != null)
                    message.amount_kwh_str = String(object.amount_kwh_str);
                return message;
            };
    
            /**
             * Creates a plain object from a DailyUsage message. Also converts values to other types if specified.
             * @function toObject
             * @memberof main.DailyUsage
             * @static
             * @param {main.DailyUsage} message DailyUsage
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            DailyUsage.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (options.defaults) {
                    object.id = "";
                    object.room_id = "";
                    object.amount_kwh_str = "";
                }
                if (message.id != null && message.hasOwnProperty("id"))
                    object.id = message.id;
                if (message.room_id != null && message.hasOwnProperty("room_id"))
                    object.room_id = message.room_id;
                if (message.amount_kwh_str != null && message.hasOwnProperty("amount_kwh_str"))
                    object.amount_kwh_str = message.amount_kwh_str;
                return object;
            };
    
            /**
             * Converts this DailyUsage to JSON.
             * @function toJSON
             * @memberof main.DailyUsage
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            DailyUsage.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };
    
            return DailyUsage;
        })();
    
        main.DeltaAmount = (function() {
    
            /**
             * Properties of a DeltaAmount.
             * @memberof main
             * @interface IDeltaAmount
             * @property {string|null} [id] DeltaAmount id
             * @property {string|null} [asks_amount_utoken] DeltaAmount asks_amount_utoken
             * @property {string|null} [bids_amount_utoken] DeltaAmount bids_amount_utoken
             */
    
            /**
             * Constructs a new DeltaAmount.
             * @memberof main
             * @classdesc Represents a DeltaAmount.
             * @implements IDeltaAmount
             * @constructor
             * @param {main.IDeltaAmount=} [properties] Properties to set
             */
            function DeltaAmount(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }
    
            /**
             * DeltaAmount id.
             * @member {string} id
             * @memberof main.DeltaAmount
             * @instance
             */
            DeltaAmount.prototype.id = "";
    
            /**
             * DeltaAmount asks_amount_utoken.
             * @member {string} asks_amount_utoken
             * @memberof main.DeltaAmount
             * @instance
             */
            DeltaAmount.prototype.asks_amount_utoken = "";
    
            /**
             * DeltaAmount bids_amount_utoken.
             * @member {string} bids_amount_utoken
             * @memberof main.DeltaAmount
             * @instance
             */
            DeltaAmount.prototype.bids_amount_utoken = "";
    
            /**
             * Encodes the specified DeltaAmount message. Does not implicitly {@link main.DeltaAmount.verify|verify} messages.
             * @function encode
             * @memberof main.DeltaAmount
             * @static
             * @param {main.IDeltaAmount} message DeltaAmount message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            DeltaAmount.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.id != null && Object.hasOwnProperty.call(message, "id"))
                    writer.uint32(/* id 1, wireType 2 =*/10).string(message.id);
                if (message.asks_amount_utoken != null && Object.hasOwnProperty.call(message, "asks_amount_utoken"))
                    writer.uint32(/* id 2, wireType 2 =*/18).string(message.asks_amount_utoken);
                if (message.bids_amount_utoken != null && Object.hasOwnProperty.call(message, "bids_amount_utoken"))
                    writer.uint32(/* id 3, wireType 2 =*/26).string(message.bids_amount_utoken);
                return writer;
            };
    
            /**
             * Encodes the specified DeltaAmount message, length delimited. Does not implicitly {@link main.DeltaAmount.verify|verify} messages.
             * @function encodeDelimited
             * @memberof main.DeltaAmount
             * @static
             * @param {main.IDeltaAmount} message DeltaAmount message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            DeltaAmount.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };
    
            /**
             * Decodes a DeltaAmount message from the specified reader or buffer.
             * @function decode
             * @memberof main.DeltaAmount
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {main.DeltaAmount} DeltaAmount
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            DeltaAmount.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.main.DeltaAmount();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1:
                        message.id = reader.string();
                        break;
                    case 2:
                        message.asks_amount_utoken = reader.string();
                        break;
                    case 3:
                        message.bids_amount_utoken = reader.string();
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };
    
            /**
             * Decodes a DeltaAmount message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof main.DeltaAmount
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {main.DeltaAmount} DeltaAmount
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            DeltaAmount.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };
    
            /**
             * Verifies a DeltaAmount message.
             * @function verify
             * @memberof main.DeltaAmount
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            DeltaAmount.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.id != null && message.hasOwnProperty("id"))
                    if (!$util.isString(message.id))
                        return "id: string expected";
                if (message.asks_amount_utoken != null && message.hasOwnProperty("asks_amount_utoken"))
                    if (!$util.isString(message.asks_amount_utoken))
                        return "asks_amount_utoken: string expected";
                if (message.bids_amount_utoken != null && message.hasOwnProperty("bids_amount_utoken"))
                    if (!$util.isString(message.bids_amount_utoken))
                        return "bids_amount_utoken: string expected";
                return null;
            };
    
            /**
             * Creates a DeltaAmount message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof main.DeltaAmount
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {main.DeltaAmount} DeltaAmount
             */
            DeltaAmount.fromObject = function fromObject(object) {
                if (object instanceof $root.main.DeltaAmount)
                    return object;
                var message = new $root.main.DeltaAmount();
                if (object.id != null)
                    message.id = String(object.id);
                if (object.asks_amount_utoken != null)
                    message.asks_amount_utoken = String(object.asks_amount_utoken);
                if (object.bids_amount_utoken != null)
                    message.bids_amount_utoken = String(object.bids_amount_utoken);
                return message;
            };
    
            /**
             * Creates a plain object from a DeltaAmount message. Also converts values to other types if specified.
             * @function toObject
             * @memberof main.DeltaAmount
             * @static
             * @param {main.DeltaAmount} message DeltaAmount
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            DeltaAmount.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (options.defaults) {
                    object.id = "";
                    object.asks_amount_utoken = "";
                    object.bids_amount_utoken = "";
                }
                if (message.id != null && message.hasOwnProperty("id"))
                    object.id = message.id;
                if (message.asks_amount_utoken != null && message.hasOwnProperty("asks_amount_utoken"))
                    object.asks_amount_utoken = message.asks_amount_utoken;
                if (message.bids_amount_utoken != null && message.hasOwnProperty("bids_amount_utoken"))
                    object.bids_amount_utoken = message.bids_amount_utoken;
                return object;
            };
    
            /**
             * Converts this DeltaAmount to JSON.
             * @function toJSON
             * @memberof main.DeltaAmount
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            DeltaAmount.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };
    
            return DeltaAmount;
        })();
    
        main.DiscountPrice = (function() {
    
            /**
             * Properties of a DiscountPrice.
             * @memberof main
             * @interface IDiscountPrice
             * @property {string|null} [id] DiscountPrice id
             * @property {string|null} [price_ujpy] DiscountPrice price_ujpy
             * @property {string|null} [amount_purchase_utoken] DiscountPrice amount_purchase_utoken
             * @property {string|null} [amount_sale_utoken] DiscountPrice amount_sale_utoken
             */
    
            /**
             * Constructs a new DiscountPrice.
             * @memberof main
             * @classdesc Represents a DiscountPrice.
             * @implements IDiscountPrice
             * @constructor
             * @param {main.IDiscountPrice=} [properties] Properties to set
             */
            function DiscountPrice(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }
    
            /**
             * DiscountPrice id.
             * @member {string} id
             * @memberof main.DiscountPrice
             * @instance
             */
            DiscountPrice.prototype.id = "";
    
            /**
             * DiscountPrice price_ujpy.
             * @member {string} price_ujpy
             * @memberof main.DiscountPrice
             * @instance
             */
            DiscountPrice.prototype.price_ujpy = "";
    
            /**
             * DiscountPrice amount_purchase_utoken.
             * @member {string} amount_purchase_utoken
             * @memberof main.DiscountPrice
             * @instance
             */
            DiscountPrice.prototype.amount_purchase_utoken = "";
    
            /**
             * DiscountPrice amount_sale_utoken.
             * @member {string} amount_sale_utoken
             * @memberof main.DiscountPrice
             * @instance
             */
            DiscountPrice.prototype.amount_sale_utoken = "";
    
            /**
             * Encodes the specified DiscountPrice message. Does not implicitly {@link main.DiscountPrice.verify|verify} messages.
             * @function encode
             * @memberof main.DiscountPrice
             * @static
             * @param {main.IDiscountPrice} message DiscountPrice message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            DiscountPrice.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.id != null && Object.hasOwnProperty.call(message, "id"))
                    writer.uint32(/* id 1, wireType 2 =*/10).string(message.id);
                if (message.price_ujpy != null && Object.hasOwnProperty.call(message, "price_ujpy"))
                    writer.uint32(/* id 2, wireType 2 =*/18).string(message.price_ujpy);
                if (message.amount_purchase_utoken != null && Object.hasOwnProperty.call(message, "amount_purchase_utoken"))
                    writer.uint32(/* id 3, wireType 2 =*/26).string(message.amount_purchase_utoken);
                if (message.amount_sale_utoken != null && Object.hasOwnProperty.call(message, "amount_sale_utoken"))
                    writer.uint32(/* id 4, wireType 2 =*/34).string(message.amount_sale_utoken);
                return writer;
            };
    
            /**
             * Encodes the specified DiscountPrice message, length delimited. Does not implicitly {@link main.DiscountPrice.verify|verify} messages.
             * @function encodeDelimited
             * @memberof main.DiscountPrice
             * @static
             * @param {main.IDiscountPrice} message DiscountPrice message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            DiscountPrice.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };
    
            /**
             * Decodes a DiscountPrice message from the specified reader or buffer.
             * @function decode
             * @memberof main.DiscountPrice
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {main.DiscountPrice} DiscountPrice
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            DiscountPrice.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.main.DiscountPrice();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1:
                        message.id = reader.string();
                        break;
                    case 2:
                        message.price_ujpy = reader.string();
                        break;
                    case 3:
                        message.amount_purchase_utoken = reader.string();
                        break;
                    case 4:
                        message.amount_sale_utoken = reader.string();
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };
    
            /**
             * Decodes a DiscountPrice message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof main.DiscountPrice
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {main.DiscountPrice} DiscountPrice
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            DiscountPrice.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };
    
            /**
             * Verifies a DiscountPrice message.
             * @function verify
             * @memberof main.DiscountPrice
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            DiscountPrice.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.id != null && message.hasOwnProperty("id"))
                    if (!$util.isString(message.id))
                        return "id: string expected";
                if (message.price_ujpy != null && message.hasOwnProperty("price_ujpy"))
                    if (!$util.isString(message.price_ujpy))
                        return "price_ujpy: string expected";
                if (message.amount_purchase_utoken != null && message.hasOwnProperty("amount_purchase_utoken"))
                    if (!$util.isString(message.amount_purchase_utoken))
                        return "amount_purchase_utoken: string expected";
                if (message.amount_sale_utoken != null && message.hasOwnProperty("amount_sale_utoken"))
                    if (!$util.isString(message.amount_sale_utoken))
                        return "amount_sale_utoken: string expected";
                return null;
            };
    
            /**
             * Creates a DiscountPrice message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof main.DiscountPrice
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {main.DiscountPrice} DiscountPrice
             */
            DiscountPrice.fromObject = function fromObject(object) {
                if (object instanceof $root.main.DiscountPrice)
                    return object;
                var message = new $root.main.DiscountPrice();
                if (object.id != null)
                    message.id = String(object.id);
                if (object.price_ujpy != null)
                    message.price_ujpy = String(object.price_ujpy);
                if (object.amount_purchase_utoken != null)
                    message.amount_purchase_utoken = String(object.amount_purchase_utoken);
                if (object.amount_sale_utoken != null)
                    message.amount_sale_utoken = String(object.amount_sale_utoken);
                return message;
            };
    
            /**
             * Creates a plain object from a DiscountPrice message. Also converts values to other types if specified.
             * @function toObject
             * @memberof main.DiscountPrice
             * @static
             * @param {main.DiscountPrice} message DiscountPrice
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            DiscountPrice.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (options.defaults) {
                    object.id = "";
                    object.price_ujpy = "";
                    object.amount_purchase_utoken = "";
                    object.amount_sale_utoken = "";
                }
                if (message.id != null && message.hasOwnProperty("id"))
                    object.id = message.id;
                if (message.price_ujpy != null && message.hasOwnProperty("price_ujpy"))
                    object.price_ujpy = message.price_ujpy;
                if (message.amount_purchase_utoken != null && message.hasOwnProperty("amount_purchase_utoken"))
                    object.amount_purchase_utoken = message.amount_purchase_utoken;
                if (message.amount_sale_utoken != null && message.hasOwnProperty("amount_sale_utoken"))
                    object.amount_sale_utoken = message.amount_sale_utoken;
                return object;
            };
    
            /**
             * Converts this DiscountPrice to JSON.
             * @function toJSON
             * @memberof main.DiscountPrice
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            DiscountPrice.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };
    
            return DiscountPrice;
        })();
    
        main.InsufficientBalance = (function() {
    
            /**
             * Properties of an InsufficientBalance.
             * @memberof main
             * @interface IInsufficientBalance
             * @property {string|null} [id] InsufficientBalance id
             * @property {string|null} [student_account_id] InsufficientBalance student_account_id
             * @property {string|null} [amount_utoken] InsufficientBalance amount_utoken
             */
    
            /**
             * Constructs a new InsufficientBalance.
             * @memberof main
             * @classdesc Represents an InsufficientBalance.
             * @implements IInsufficientBalance
             * @constructor
             * @param {main.IInsufficientBalance=} [properties] Properties to set
             */
            function InsufficientBalance(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }
    
            /**
             * InsufficientBalance id.
             * @member {string} id
             * @memberof main.InsufficientBalance
             * @instance
             */
            InsufficientBalance.prototype.id = "";
    
            /**
             * InsufficientBalance student_account_id.
             * @member {string} student_account_id
             * @memberof main.InsufficientBalance
             * @instance
             */
            InsufficientBalance.prototype.student_account_id = "";
    
            /**
             * InsufficientBalance amount_utoken.
             * @member {string} amount_utoken
             * @memberof main.InsufficientBalance
             * @instance
             */
            InsufficientBalance.prototype.amount_utoken = "";
    
            /**
             * Encodes the specified InsufficientBalance message. Does not implicitly {@link main.InsufficientBalance.verify|verify} messages.
             * @function encode
             * @memberof main.InsufficientBalance
             * @static
             * @param {main.IInsufficientBalance} message InsufficientBalance message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            InsufficientBalance.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.id != null && Object.hasOwnProperty.call(message, "id"))
                    writer.uint32(/* id 1, wireType 2 =*/10).string(message.id);
                if (message.student_account_id != null && Object.hasOwnProperty.call(message, "student_account_id"))
                    writer.uint32(/* id 2, wireType 2 =*/18).string(message.student_account_id);
                if (message.amount_utoken != null && Object.hasOwnProperty.call(message, "amount_utoken"))
                    writer.uint32(/* id 3, wireType 2 =*/26).string(message.amount_utoken);
                return writer;
            };
    
            /**
             * Encodes the specified InsufficientBalance message, length delimited. Does not implicitly {@link main.InsufficientBalance.verify|verify} messages.
             * @function encodeDelimited
             * @memberof main.InsufficientBalance
             * @static
             * @param {main.IInsufficientBalance} message InsufficientBalance message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            InsufficientBalance.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };
    
            /**
             * Decodes an InsufficientBalance message from the specified reader or buffer.
             * @function decode
             * @memberof main.InsufficientBalance
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {main.InsufficientBalance} InsufficientBalance
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            InsufficientBalance.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.main.InsufficientBalance();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1:
                        message.id = reader.string();
                        break;
                    case 2:
                        message.student_account_id = reader.string();
                        break;
                    case 3:
                        message.amount_utoken = reader.string();
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };
    
            /**
             * Decodes an InsufficientBalance message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof main.InsufficientBalance
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {main.InsufficientBalance} InsufficientBalance
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            InsufficientBalance.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };
    
            /**
             * Verifies an InsufficientBalance message.
             * @function verify
             * @memberof main.InsufficientBalance
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            InsufficientBalance.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.id != null && message.hasOwnProperty("id"))
                    if (!$util.isString(message.id))
                        return "id: string expected";
                if (message.student_account_id != null && message.hasOwnProperty("student_account_id"))
                    if (!$util.isString(message.student_account_id))
                        return "student_account_id: string expected";
                if (message.amount_utoken != null && message.hasOwnProperty("amount_utoken"))
                    if (!$util.isString(message.amount_utoken))
                        return "amount_utoken: string expected";
                return null;
            };
    
            /**
             * Creates an InsufficientBalance message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof main.InsufficientBalance
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {main.InsufficientBalance} InsufficientBalance
             */
            InsufficientBalance.fromObject = function fromObject(object) {
                if (object instanceof $root.main.InsufficientBalance)
                    return object;
                var message = new $root.main.InsufficientBalance();
                if (object.id != null)
                    message.id = String(object.id);
                if (object.student_account_id != null)
                    message.student_account_id = String(object.student_account_id);
                if (object.amount_utoken != null)
                    message.amount_utoken = String(object.amount_utoken);
                return message;
            };
    
            /**
             * Creates a plain object from an InsufficientBalance message. Also converts values to other types if specified.
             * @function toObject
             * @memberof main.InsufficientBalance
             * @static
             * @param {main.InsufficientBalance} message InsufficientBalance
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            InsufficientBalance.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (options.defaults) {
                    object.id = "";
                    object.student_account_id = "";
                    object.amount_utoken = "";
                }
                if (message.id != null && message.hasOwnProperty("id"))
                    object.id = message.id;
                if (message.student_account_id != null && message.hasOwnProperty("student_account_id"))
                    object.student_account_id = message.student_account_id;
                if (message.amount_utoken != null && message.hasOwnProperty("amount_utoken"))
                    object.amount_utoken = message.amount_utoken;
                return object;
            };
    
            /**
             * Converts this InsufficientBalance to JSON.
             * @function toJSON
             * @memberof main.InsufficientBalance
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            InsufficientBalance.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };
    
            return InsufficientBalance;
        })();
    
        main.MarketStatus = (function() {
    
            /**
             * Properties of a MarketStatus.
             * @memberof main
             * @interface IMarketStatus
             * @property {string|null} [id] MarketStatus id
             * @property {boolean|null} [is_finished_normal] MarketStatus is_finished_normal
             * @property {boolean|null} [is_finished_renewable] MarketStatus is_finished_renewable
             */
    
            /**
             * Constructs a new MarketStatus.
             * @memberof main
             * @classdesc Represents a MarketStatus.
             * @implements IMarketStatus
             * @constructor
             * @param {main.IMarketStatus=} [properties] Properties to set
             */
            function MarketStatus(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }
    
            /**
             * MarketStatus id.
             * @member {string} id
             * @memberof main.MarketStatus
             * @instance
             */
            MarketStatus.prototype.id = "";
    
            /**
             * MarketStatus is_finished_normal.
             * @member {boolean} is_finished_normal
             * @memberof main.MarketStatus
             * @instance
             */
            MarketStatus.prototype.is_finished_normal = false;
    
            /**
             * MarketStatus is_finished_renewable.
             * @member {boolean} is_finished_renewable
             * @memberof main.MarketStatus
             * @instance
             */
            MarketStatus.prototype.is_finished_renewable = false;
    
            /**
             * Encodes the specified MarketStatus message. Does not implicitly {@link main.MarketStatus.verify|verify} messages.
             * @function encode
             * @memberof main.MarketStatus
             * @static
             * @param {main.IMarketStatus} message MarketStatus message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            MarketStatus.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.id != null && Object.hasOwnProperty.call(message, "id"))
                    writer.uint32(/* id 1, wireType 2 =*/10).string(message.id);
                if (message.is_finished_normal != null && Object.hasOwnProperty.call(message, "is_finished_normal"))
                    writer.uint32(/* id 2, wireType 0 =*/16).bool(message.is_finished_normal);
                if (message.is_finished_renewable != null && Object.hasOwnProperty.call(message, "is_finished_renewable"))
                    writer.uint32(/* id 3, wireType 0 =*/24).bool(message.is_finished_renewable);
                return writer;
            };
    
            /**
             * Encodes the specified MarketStatus message, length delimited. Does not implicitly {@link main.MarketStatus.verify|verify} messages.
             * @function encodeDelimited
             * @memberof main.MarketStatus
             * @static
             * @param {main.IMarketStatus} message MarketStatus message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            MarketStatus.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };
    
            /**
             * Decodes a MarketStatus message from the specified reader or buffer.
             * @function decode
             * @memberof main.MarketStatus
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {main.MarketStatus} MarketStatus
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            MarketStatus.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.main.MarketStatus();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1:
                        message.id = reader.string();
                        break;
                    case 2:
                        message.is_finished_normal = reader.bool();
                        break;
                    case 3:
                        message.is_finished_renewable = reader.bool();
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };
    
            /**
             * Decodes a MarketStatus message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof main.MarketStatus
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {main.MarketStatus} MarketStatus
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            MarketStatus.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };
    
            /**
             * Verifies a MarketStatus message.
             * @function verify
             * @memberof main.MarketStatus
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            MarketStatus.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.id != null && message.hasOwnProperty("id"))
                    if (!$util.isString(message.id))
                        return "id: string expected";
                if (message.is_finished_normal != null && message.hasOwnProperty("is_finished_normal"))
                    if (typeof message.is_finished_normal !== "boolean")
                        return "is_finished_normal: boolean expected";
                if (message.is_finished_renewable != null && message.hasOwnProperty("is_finished_renewable"))
                    if (typeof message.is_finished_renewable !== "boolean")
                        return "is_finished_renewable: boolean expected";
                return null;
            };
    
            /**
             * Creates a MarketStatus message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof main.MarketStatus
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {main.MarketStatus} MarketStatus
             */
            MarketStatus.fromObject = function fromObject(object) {
                if (object instanceof $root.main.MarketStatus)
                    return object;
                var message = new $root.main.MarketStatus();
                if (object.id != null)
                    message.id = String(object.id);
                if (object.is_finished_normal != null)
                    message.is_finished_normal = Boolean(object.is_finished_normal);
                if (object.is_finished_renewable != null)
                    message.is_finished_renewable = Boolean(object.is_finished_renewable);
                return message;
            };
    
            /**
             * Creates a plain object from a MarketStatus message. Also converts values to other types if specified.
             * @function toObject
             * @memberof main.MarketStatus
             * @static
             * @param {main.MarketStatus} message MarketStatus
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            MarketStatus.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (options.defaults) {
                    object.id = "";
                    object.is_finished_normal = false;
                    object.is_finished_renewable = false;
                }
                if (message.id != null && message.hasOwnProperty("id"))
                    object.id = message.id;
                if (message.is_finished_normal != null && message.hasOwnProperty("is_finished_normal"))
                    object.is_finished_normal = message.is_finished_normal;
                if (message.is_finished_renewable != null && message.hasOwnProperty("is_finished_renewable"))
                    object.is_finished_renewable = message.is_finished_renewable;
                return object;
            };
    
            /**
             * Converts this MarketStatus to JSON.
             * @function toJSON
             * @memberof main.MarketStatus
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            MarketStatus.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };
    
            return MarketStatus;
        })();
    
        main.MessageDelete = (function() {
    
            /**
             * Properties of a MessageDelete.
             * @memberof main
             * @interface IMessageDelete
             * @property {string|null} [id] MessageDelete id
             * @property {string|null} [chat_id] MessageDelete chat_id
             * @property {string|null} [message_id] MessageDelete message_id
             */
    
            /**
             * Constructs a new MessageDelete.
             * @memberof main
             * @classdesc Represents a MessageDelete.
             * @implements IMessageDelete
             * @constructor
             * @param {main.IMessageDelete=} [properties] Properties to set
             */
            function MessageDelete(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }
    
            /**
             * MessageDelete id.
             * @member {string} id
             * @memberof main.MessageDelete
             * @instance
             */
            MessageDelete.prototype.id = "";
    
            /**
             * MessageDelete chat_id.
             * @member {string} chat_id
             * @memberof main.MessageDelete
             * @instance
             */
            MessageDelete.prototype.chat_id = "";
    
            /**
             * MessageDelete message_id.
             * @member {string} message_id
             * @memberof main.MessageDelete
             * @instance
             */
            MessageDelete.prototype.message_id = "";
    
            /**
             * Encodes the specified MessageDelete message. Does not implicitly {@link main.MessageDelete.verify|verify} messages.
             * @function encode
             * @memberof main.MessageDelete
             * @static
             * @param {main.IMessageDelete} message MessageDelete message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            MessageDelete.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.id != null && Object.hasOwnProperty.call(message, "id"))
                    writer.uint32(/* id 1, wireType 2 =*/10).string(message.id);
                if (message.chat_id != null && Object.hasOwnProperty.call(message, "chat_id"))
                    writer.uint32(/* id 2, wireType 2 =*/18).string(message.chat_id);
                if (message.message_id != null && Object.hasOwnProperty.call(message, "message_id"))
                    writer.uint32(/* id 3, wireType 2 =*/26).string(message.message_id);
                return writer;
            };
    
            /**
             * Encodes the specified MessageDelete message, length delimited. Does not implicitly {@link main.MessageDelete.verify|verify} messages.
             * @function encodeDelimited
             * @memberof main.MessageDelete
             * @static
             * @param {main.IMessageDelete} message MessageDelete message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            MessageDelete.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };
    
            /**
             * Decodes a MessageDelete message from the specified reader or buffer.
             * @function decode
             * @memberof main.MessageDelete
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {main.MessageDelete} MessageDelete
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            MessageDelete.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.main.MessageDelete();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1:
                        message.id = reader.string();
                        break;
                    case 2:
                        message.chat_id = reader.string();
                        break;
                    case 3:
                        message.message_id = reader.string();
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };
    
            /**
             * Decodes a MessageDelete message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof main.MessageDelete
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {main.MessageDelete} MessageDelete
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            MessageDelete.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };
    
            /**
             * Verifies a MessageDelete message.
             * @function verify
             * @memberof main.MessageDelete
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            MessageDelete.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.id != null && message.hasOwnProperty("id"))
                    if (!$util.isString(message.id))
                        return "id: string expected";
                if (message.chat_id != null && message.hasOwnProperty("chat_id"))
                    if (!$util.isString(message.chat_id))
                        return "chat_id: string expected";
                if (message.message_id != null && message.hasOwnProperty("message_id"))
                    if (!$util.isString(message.message_id))
                        return "message_id: string expected";
                return null;
            };
    
            /**
             * Creates a MessageDelete message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof main.MessageDelete
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {main.MessageDelete} MessageDelete
             */
            MessageDelete.fromObject = function fromObject(object) {
                if (object instanceof $root.main.MessageDelete)
                    return object;
                var message = new $root.main.MessageDelete();
                if (object.id != null)
                    message.id = String(object.id);
                if (object.chat_id != null)
                    message.chat_id = String(object.chat_id);
                if (object.message_id != null)
                    message.message_id = String(object.message_id);
                return message;
            };
    
            /**
             * Creates a plain object from a MessageDelete message. Also converts values to other types if specified.
             * @function toObject
             * @memberof main.MessageDelete
             * @static
             * @param {main.MessageDelete} message MessageDelete
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            MessageDelete.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (options.defaults) {
                    object.id = "";
                    object.chat_id = "";
                    object.message_id = "";
                }
                if (message.id != null && message.hasOwnProperty("id"))
                    object.id = message.id;
                if (message.chat_id != null && message.hasOwnProperty("chat_id"))
                    object.chat_id = message.chat_id;
                if (message.message_id != null && message.hasOwnProperty("message_id"))
                    object.message_id = message.message_id;
                return object;
            };
    
            /**
             * Converts this MessageDelete to JSON.
             * @function toJSON
             * @memberof main.MessageDelete
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            MessageDelete.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };
    
            return MessageDelete;
        })();
    
        main.MessageRead = (function() {
    
            /**
             * Properties of a MessageRead.
             * @memberof main
             * @interface IMessageRead
             * @property {string|null} [id] MessageRead id
             * @property {string|null} [chat_id] MessageRead chat_id
             * @property {string|null} [message_id] MessageRead message_id
             */
    
            /**
             * Constructs a new MessageRead.
             * @memberof main
             * @classdesc Represents a MessageRead.
             * @implements IMessageRead
             * @constructor
             * @param {main.IMessageRead=} [properties] Properties to set
             */
            function MessageRead(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }
    
            /**
             * MessageRead id.
             * @member {string} id
             * @memberof main.MessageRead
             * @instance
             */
            MessageRead.prototype.id = "";
    
            /**
             * MessageRead chat_id.
             * @member {string} chat_id
             * @memberof main.MessageRead
             * @instance
             */
            MessageRead.prototype.chat_id = "";
    
            /**
             * MessageRead message_id.
             * @member {string} message_id
             * @memberof main.MessageRead
             * @instance
             */
            MessageRead.prototype.message_id = "";
    
            /**
             * Encodes the specified MessageRead message. Does not implicitly {@link main.MessageRead.verify|verify} messages.
             * @function encode
             * @memberof main.MessageRead
             * @static
             * @param {main.IMessageRead} message MessageRead message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            MessageRead.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.id != null && Object.hasOwnProperty.call(message, "id"))
                    writer.uint32(/* id 1, wireType 2 =*/10).string(message.id);
                if (message.chat_id != null && Object.hasOwnProperty.call(message, "chat_id"))
                    writer.uint32(/* id 2, wireType 2 =*/18).string(message.chat_id);
                if (message.message_id != null && Object.hasOwnProperty.call(message, "message_id"))
                    writer.uint32(/* id 3, wireType 2 =*/26).string(message.message_id);
                return writer;
            };
    
            /**
             * Encodes the specified MessageRead message, length delimited. Does not implicitly {@link main.MessageRead.verify|verify} messages.
             * @function encodeDelimited
             * @memberof main.MessageRead
             * @static
             * @param {main.IMessageRead} message MessageRead message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            MessageRead.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };
    
            /**
             * Decodes a MessageRead message from the specified reader or buffer.
             * @function decode
             * @memberof main.MessageRead
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {main.MessageRead} MessageRead
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            MessageRead.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.main.MessageRead();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1:
                        message.id = reader.string();
                        break;
                    case 2:
                        message.chat_id = reader.string();
                        break;
                    case 3:
                        message.message_id = reader.string();
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };
    
            /**
             * Decodes a MessageRead message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof main.MessageRead
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {main.MessageRead} MessageRead
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            MessageRead.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };
    
            /**
             * Verifies a MessageRead message.
             * @function verify
             * @memberof main.MessageRead
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            MessageRead.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.id != null && message.hasOwnProperty("id"))
                    if (!$util.isString(message.id))
                        return "id: string expected";
                if (message.chat_id != null && message.hasOwnProperty("chat_id"))
                    if (!$util.isString(message.chat_id))
                        return "chat_id: string expected";
                if (message.message_id != null && message.hasOwnProperty("message_id"))
                    if (!$util.isString(message.message_id))
                        return "message_id: string expected";
                return null;
            };
    
            /**
             * Creates a MessageRead message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof main.MessageRead
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {main.MessageRead} MessageRead
             */
            MessageRead.fromObject = function fromObject(object) {
                if (object instanceof $root.main.MessageRead)
                    return object;
                var message = new $root.main.MessageRead();
                if (object.id != null)
                    message.id = String(object.id);
                if (object.chat_id != null)
                    message.chat_id = String(object.chat_id);
                if (object.message_id != null)
                    message.message_id = String(object.message_id);
                return message;
            };
    
            /**
             * Creates a plain object from a MessageRead message. Also converts values to other types if specified.
             * @function toObject
             * @memberof main.MessageRead
             * @static
             * @param {main.MessageRead} message MessageRead
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            MessageRead.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (options.defaults) {
                    object.id = "";
                    object.chat_id = "";
                    object.message_id = "";
                }
                if (message.id != null && message.hasOwnProperty("id"))
                    object.id = message.id;
                if (message.chat_id != null && message.hasOwnProperty("chat_id"))
                    object.chat_id = message.chat_id;
                if (message.message_id != null && message.hasOwnProperty("message_id"))
                    object.message_id = message.message_id;
                return object;
            };
    
            /**
             * Converts this MessageRead to JSON.
             * @function toJSON
             * @memberof main.MessageRead
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            MessageRead.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };
    
            return MessageRead;
        })();
    
        main.Message = (function() {
    
            /**
             * Properties of a Message.
             * @memberof main
             * @interface IMessage
             * @property {string|null} [id] Message id
             * @property {string|null} [chat_id] Message chat_id
             * @property {string|null} [account_id] Message account_id
             * @property {string|null} [text] Message text
             * @property {boolean|null} [is_read] Message is_read
             * @property {boolean|null} [is_deleted] Message is_deleted
             */
    
            /**
             * Constructs a new Message.
             * @memberof main
             * @classdesc Represents a Message.
             * @implements IMessage
             * @constructor
             * @param {main.IMessage=} [properties] Properties to set
             */
            function Message(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }
    
            /**
             * Message id.
             * @member {string} id
             * @memberof main.Message
             * @instance
             */
            Message.prototype.id = "";
    
            /**
             * Message chat_id.
             * @member {string} chat_id
             * @memberof main.Message
             * @instance
             */
            Message.prototype.chat_id = "";
    
            /**
             * Message account_id.
             * @member {string} account_id
             * @memberof main.Message
             * @instance
             */
            Message.prototype.account_id = "";
    
            /**
             * Message text.
             * @member {string} text
             * @memberof main.Message
             * @instance
             */
            Message.prototype.text = "";
    
            /**
             * Message is_read.
             * @member {boolean} is_read
             * @memberof main.Message
             * @instance
             */
            Message.prototype.is_read = false;
    
            /**
             * Message is_deleted.
             * @member {boolean} is_deleted
             * @memberof main.Message
             * @instance
             */
            Message.prototype.is_deleted = false;
    
            /**
             * Encodes the specified Message message. Does not implicitly {@link main.Message.verify|verify} messages.
             * @function encode
             * @memberof main.Message
             * @static
             * @param {main.IMessage} message Message message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            Message.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.id != null && Object.hasOwnProperty.call(message, "id"))
                    writer.uint32(/* id 1, wireType 2 =*/10).string(message.id);
                if (message.chat_id != null && Object.hasOwnProperty.call(message, "chat_id"))
                    writer.uint32(/* id 2, wireType 2 =*/18).string(message.chat_id);
                if (message.account_id != null && Object.hasOwnProperty.call(message, "account_id"))
                    writer.uint32(/* id 3, wireType 2 =*/26).string(message.account_id);
                if (message.text != null && Object.hasOwnProperty.call(message, "text"))
                    writer.uint32(/* id 4, wireType 2 =*/34).string(message.text);
                if (message.is_read != null && Object.hasOwnProperty.call(message, "is_read"))
                    writer.uint32(/* id 5, wireType 0 =*/40).bool(message.is_read);
                if (message.is_deleted != null && Object.hasOwnProperty.call(message, "is_deleted"))
                    writer.uint32(/* id 6, wireType 0 =*/48).bool(message.is_deleted);
                return writer;
            };
    
            /**
             * Encodes the specified Message message, length delimited. Does not implicitly {@link main.Message.verify|verify} messages.
             * @function encodeDelimited
             * @memberof main.Message
             * @static
             * @param {main.IMessage} message Message message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            Message.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };
    
            /**
             * Decodes a Message message from the specified reader or buffer.
             * @function decode
             * @memberof main.Message
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {main.Message} Message
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            Message.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.main.Message();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1:
                        message.id = reader.string();
                        break;
                    case 2:
                        message.chat_id = reader.string();
                        break;
                    case 3:
                        message.account_id = reader.string();
                        break;
                    case 4:
                        message.text = reader.string();
                        break;
                    case 5:
                        message.is_read = reader.bool();
                        break;
                    case 6:
                        message.is_deleted = reader.bool();
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };
    
            /**
             * Decodes a Message message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof main.Message
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {main.Message} Message
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            Message.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };
    
            /**
             * Verifies a Message message.
             * @function verify
             * @memberof main.Message
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            Message.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.id != null && message.hasOwnProperty("id"))
                    if (!$util.isString(message.id))
                        return "id: string expected";
                if (message.chat_id != null && message.hasOwnProperty("chat_id"))
                    if (!$util.isString(message.chat_id))
                        return "chat_id: string expected";
                if (message.account_id != null && message.hasOwnProperty("account_id"))
                    if (!$util.isString(message.account_id))
                        return "account_id: string expected";
                if (message.text != null && message.hasOwnProperty("text"))
                    if (!$util.isString(message.text))
                        return "text: string expected";
                if (message.is_read != null && message.hasOwnProperty("is_read"))
                    if (typeof message.is_read !== "boolean")
                        return "is_read: boolean expected";
                if (message.is_deleted != null && message.hasOwnProperty("is_deleted"))
                    if (typeof message.is_deleted !== "boolean")
                        return "is_deleted: boolean expected";
                return null;
            };
    
            /**
             * Creates a Message message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof main.Message
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {main.Message} Message
             */
            Message.fromObject = function fromObject(object) {
                if (object instanceof $root.main.Message)
                    return object;
                var message = new $root.main.Message();
                if (object.id != null)
                    message.id = String(object.id);
                if (object.chat_id != null)
                    message.chat_id = String(object.chat_id);
                if (object.account_id != null)
                    message.account_id = String(object.account_id);
                if (object.text != null)
                    message.text = String(object.text);
                if (object.is_read != null)
                    message.is_read = Boolean(object.is_read);
                if (object.is_deleted != null)
                    message.is_deleted = Boolean(object.is_deleted);
                return message;
            };
    
            /**
             * Creates a plain object from a Message message. Also converts values to other types if specified.
             * @function toObject
             * @memberof main.Message
             * @static
             * @param {main.Message} message Message
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            Message.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (options.defaults) {
                    object.id = "";
                    object.chat_id = "";
                    object.account_id = "";
                    object.text = "";
                    object.is_read = false;
                    object.is_deleted = false;
                }
                if (message.id != null && message.hasOwnProperty("id"))
                    object.id = message.id;
                if (message.chat_id != null && message.hasOwnProperty("chat_id"))
                    object.chat_id = message.chat_id;
                if (message.account_id != null && message.hasOwnProperty("account_id"))
                    object.account_id = message.account_id;
                if (message.text != null && message.hasOwnProperty("text"))
                    object.text = message.text;
                if (message.is_read != null && message.hasOwnProperty("is_read"))
                    object.is_read = message.is_read;
                if (message.is_deleted != null && message.hasOwnProperty("is_deleted"))
                    object.is_deleted = message.is_deleted;
                return object;
            };
    
            /**
             * Converts this Message to JSON.
             * @function toJSON
             * @memberof main.Message
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            Message.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };
    
            return Message;
        })();
    
        main.MonthlyPayment = (function() {
    
            /**
             * Properties of a MonthlyPayment.
             * @memberof main
             * @interface IMonthlyPayment
             * @property {string|null} [id] MonthlyPayment id
             * @property {string|null} [student_account_id] MonthlyPayment student_account_id
             * @property {string|null} [year] MonthlyPayment year
             * @property {string|null} [month] MonthlyPayment month
             * @property {string|null} [amount_ujpy] MonthlyPayment amount_ujpy
             * @property {string|null} [amount_primary_ujpy] MonthlyPayment amount_primary_ujpy
             * @property {string|null} [amount_adjust_ujpy] MonthlyPayment amount_adjust_ujpy
             * @property {string|null} [amount_market_ujpy] MonthlyPayment amount_market_ujpy
             * @property {string|null} [amount_reward_ujpy] MonthlyPayment amount_reward_ujpy
             * @property {string|null} [amount_utoken] MonthlyPayment amount_utoken
             */
    
            /**
             * Constructs a new MonthlyPayment.
             * @memberof main
             * @classdesc Represents a MonthlyPayment.
             * @implements IMonthlyPayment
             * @constructor
             * @param {main.IMonthlyPayment=} [properties] Properties to set
             */
            function MonthlyPayment(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }
    
            /**
             * MonthlyPayment id.
             * @member {string} id
             * @memberof main.MonthlyPayment
             * @instance
             */
            MonthlyPayment.prototype.id = "";
    
            /**
             * MonthlyPayment student_account_id.
             * @member {string} student_account_id
             * @memberof main.MonthlyPayment
             * @instance
             */
            MonthlyPayment.prototype.student_account_id = "";
    
            /**
             * MonthlyPayment year.
             * @member {string} year
             * @memberof main.MonthlyPayment
             * @instance
             */
            MonthlyPayment.prototype.year = "";
    
            /**
             * MonthlyPayment month.
             * @member {string} month
             * @memberof main.MonthlyPayment
             * @instance
             */
            MonthlyPayment.prototype.month = "";
    
            /**
             * MonthlyPayment amount_ujpy.
             * @member {string} amount_ujpy
             * @memberof main.MonthlyPayment
             * @instance
             */
            MonthlyPayment.prototype.amount_ujpy = "";
    
            /**
             * MonthlyPayment amount_primary_ujpy.
             * @member {string} amount_primary_ujpy
             * @memberof main.MonthlyPayment
             * @instance
             */
            MonthlyPayment.prototype.amount_primary_ujpy = "";
    
            /**
             * MonthlyPayment amount_adjust_ujpy.
             * @member {string} amount_adjust_ujpy
             * @memberof main.MonthlyPayment
             * @instance
             */
            MonthlyPayment.prototype.amount_adjust_ujpy = "";
    
            /**
             * MonthlyPayment amount_market_ujpy.
             * @member {string} amount_market_ujpy
             * @memberof main.MonthlyPayment
             * @instance
             */
            MonthlyPayment.prototype.amount_market_ujpy = "";
    
            /**
             * MonthlyPayment amount_reward_ujpy.
             * @member {string} amount_reward_ujpy
             * @memberof main.MonthlyPayment
             * @instance
             */
            MonthlyPayment.prototype.amount_reward_ujpy = "";
    
            /**
             * MonthlyPayment amount_utoken.
             * @member {string} amount_utoken
             * @memberof main.MonthlyPayment
             * @instance
             */
            MonthlyPayment.prototype.amount_utoken = "";
    
            /**
             * Encodes the specified MonthlyPayment message. Does not implicitly {@link main.MonthlyPayment.verify|verify} messages.
             * @function encode
             * @memberof main.MonthlyPayment
             * @static
             * @param {main.IMonthlyPayment} message MonthlyPayment message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            MonthlyPayment.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.id != null && Object.hasOwnProperty.call(message, "id"))
                    writer.uint32(/* id 1, wireType 2 =*/10).string(message.id);
                if (message.student_account_id != null && Object.hasOwnProperty.call(message, "student_account_id"))
                    writer.uint32(/* id 2, wireType 2 =*/18).string(message.student_account_id);
                if (message.year != null && Object.hasOwnProperty.call(message, "year"))
                    writer.uint32(/* id 3, wireType 2 =*/26).string(message.year);
                if (message.month != null && Object.hasOwnProperty.call(message, "month"))
                    writer.uint32(/* id 4, wireType 2 =*/34).string(message.month);
                if (message.amount_ujpy != null && Object.hasOwnProperty.call(message, "amount_ujpy"))
                    writer.uint32(/* id 5, wireType 2 =*/42).string(message.amount_ujpy);
                if (message.amount_primary_ujpy != null && Object.hasOwnProperty.call(message, "amount_primary_ujpy"))
                    writer.uint32(/* id 6, wireType 2 =*/50).string(message.amount_primary_ujpy);
                if (message.amount_adjust_ujpy != null && Object.hasOwnProperty.call(message, "amount_adjust_ujpy"))
                    writer.uint32(/* id 7, wireType 2 =*/58).string(message.amount_adjust_ujpy);
                if (message.amount_market_ujpy != null && Object.hasOwnProperty.call(message, "amount_market_ujpy"))
                    writer.uint32(/* id 8, wireType 2 =*/66).string(message.amount_market_ujpy);
                if (message.amount_reward_ujpy != null && Object.hasOwnProperty.call(message, "amount_reward_ujpy"))
                    writer.uint32(/* id 9, wireType 2 =*/74).string(message.amount_reward_ujpy);
                if (message.amount_utoken != null && Object.hasOwnProperty.call(message, "amount_utoken"))
                    writer.uint32(/* id 10, wireType 2 =*/82).string(message.amount_utoken);
                return writer;
            };
    
            /**
             * Encodes the specified MonthlyPayment message, length delimited. Does not implicitly {@link main.MonthlyPayment.verify|verify} messages.
             * @function encodeDelimited
             * @memberof main.MonthlyPayment
             * @static
             * @param {main.IMonthlyPayment} message MonthlyPayment message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            MonthlyPayment.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };
    
            /**
             * Decodes a MonthlyPayment message from the specified reader or buffer.
             * @function decode
             * @memberof main.MonthlyPayment
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {main.MonthlyPayment} MonthlyPayment
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            MonthlyPayment.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.main.MonthlyPayment();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1:
                        message.id = reader.string();
                        break;
                    case 2:
                        message.student_account_id = reader.string();
                        break;
                    case 3:
                        message.year = reader.string();
                        break;
                    case 4:
                        message.month = reader.string();
                        break;
                    case 5:
                        message.amount_ujpy = reader.string();
                        break;
                    case 6:
                        message.amount_primary_ujpy = reader.string();
                        break;
                    case 7:
                        message.amount_adjust_ujpy = reader.string();
                        break;
                    case 8:
                        message.amount_market_ujpy = reader.string();
                        break;
                    case 9:
                        message.amount_reward_ujpy = reader.string();
                        break;
                    case 10:
                        message.amount_utoken = reader.string();
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };
    
            /**
             * Decodes a MonthlyPayment message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof main.MonthlyPayment
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {main.MonthlyPayment} MonthlyPayment
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            MonthlyPayment.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };
    
            /**
             * Verifies a MonthlyPayment message.
             * @function verify
             * @memberof main.MonthlyPayment
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            MonthlyPayment.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.id != null && message.hasOwnProperty("id"))
                    if (!$util.isString(message.id))
                        return "id: string expected";
                if (message.student_account_id != null && message.hasOwnProperty("student_account_id"))
                    if (!$util.isString(message.student_account_id))
                        return "student_account_id: string expected";
                if (message.year != null && message.hasOwnProperty("year"))
                    if (!$util.isString(message.year))
                        return "year: string expected";
                if (message.month != null && message.hasOwnProperty("month"))
                    if (!$util.isString(message.month))
                        return "month: string expected";
                if (message.amount_ujpy != null && message.hasOwnProperty("amount_ujpy"))
                    if (!$util.isString(message.amount_ujpy))
                        return "amount_ujpy: string expected";
                if (message.amount_primary_ujpy != null && message.hasOwnProperty("amount_primary_ujpy"))
                    if (!$util.isString(message.amount_primary_ujpy))
                        return "amount_primary_ujpy: string expected";
                if (message.amount_adjust_ujpy != null && message.hasOwnProperty("amount_adjust_ujpy"))
                    if (!$util.isString(message.amount_adjust_ujpy))
                        return "amount_adjust_ujpy: string expected";
                if (message.amount_market_ujpy != null && message.hasOwnProperty("amount_market_ujpy"))
                    if (!$util.isString(message.amount_market_ujpy))
                        return "amount_market_ujpy: string expected";
                if (message.amount_reward_ujpy != null && message.hasOwnProperty("amount_reward_ujpy"))
                    if (!$util.isString(message.amount_reward_ujpy))
                        return "amount_reward_ujpy: string expected";
                if (message.amount_utoken != null && message.hasOwnProperty("amount_utoken"))
                    if (!$util.isString(message.amount_utoken))
                        return "amount_utoken: string expected";
                return null;
            };
    
            /**
             * Creates a MonthlyPayment message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof main.MonthlyPayment
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {main.MonthlyPayment} MonthlyPayment
             */
            MonthlyPayment.fromObject = function fromObject(object) {
                if (object instanceof $root.main.MonthlyPayment)
                    return object;
                var message = new $root.main.MonthlyPayment();
                if (object.id != null)
                    message.id = String(object.id);
                if (object.student_account_id != null)
                    message.student_account_id = String(object.student_account_id);
                if (object.year != null)
                    message.year = String(object.year);
                if (object.month != null)
                    message.month = String(object.month);
                if (object.amount_ujpy != null)
                    message.amount_ujpy = String(object.amount_ujpy);
                if (object.amount_primary_ujpy != null)
                    message.amount_primary_ujpy = String(object.amount_primary_ujpy);
                if (object.amount_adjust_ujpy != null)
                    message.amount_adjust_ujpy = String(object.amount_adjust_ujpy);
                if (object.amount_market_ujpy != null)
                    message.amount_market_ujpy = String(object.amount_market_ujpy);
                if (object.amount_reward_ujpy != null)
                    message.amount_reward_ujpy = String(object.amount_reward_ujpy);
                if (object.amount_utoken != null)
                    message.amount_utoken = String(object.amount_utoken);
                return message;
            };
    
            /**
             * Creates a plain object from a MonthlyPayment message. Also converts values to other types if specified.
             * @function toObject
             * @memberof main.MonthlyPayment
             * @static
             * @param {main.MonthlyPayment} message MonthlyPayment
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            MonthlyPayment.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (options.defaults) {
                    object.id = "";
                    object.student_account_id = "";
                    object.year = "";
                    object.month = "";
                    object.amount_ujpy = "";
                    object.amount_primary_ujpy = "";
                    object.amount_adjust_ujpy = "";
                    object.amount_market_ujpy = "";
                    object.amount_reward_ujpy = "";
                    object.amount_utoken = "";
                }
                if (message.id != null && message.hasOwnProperty("id"))
                    object.id = message.id;
                if (message.student_account_id != null && message.hasOwnProperty("student_account_id"))
                    object.student_account_id = message.student_account_id;
                if (message.year != null && message.hasOwnProperty("year"))
                    object.year = message.year;
                if (message.month != null && message.hasOwnProperty("month"))
                    object.month = message.month;
                if (message.amount_ujpy != null && message.hasOwnProperty("amount_ujpy"))
                    object.amount_ujpy = message.amount_ujpy;
                if (message.amount_primary_ujpy != null && message.hasOwnProperty("amount_primary_ujpy"))
                    object.amount_primary_ujpy = message.amount_primary_ujpy;
                if (message.amount_adjust_ujpy != null && message.hasOwnProperty("amount_adjust_ujpy"))
                    object.amount_adjust_ujpy = message.amount_adjust_ujpy;
                if (message.amount_market_ujpy != null && message.hasOwnProperty("amount_market_ujpy"))
                    object.amount_market_ujpy = message.amount_market_ujpy;
                if (message.amount_reward_ujpy != null && message.hasOwnProperty("amount_reward_ujpy"))
                    object.amount_reward_ujpy = message.amount_reward_ujpy;
                if (message.amount_utoken != null && message.hasOwnProperty("amount_utoken"))
                    object.amount_utoken = message.amount_utoken;
                return object;
            };
    
            /**
             * Converts this MonthlyPayment to JSON.
             * @function toJSON
             * @memberof main.MonthlyPayment
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            MonthlyPayment.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };
    
            return MonthlyPayment;
        })();
    
        main.MonthlySettlement = (function() {
    
            /**
             * Properties of a MonthlySettlement.
             * @memberof main
             * @interface IMonthlySettlement
             * @property {string|null} [id] MonthlySettlement id
             * @property {string|null} [year] MonthlySettlement year
             * @property {string|null} [month] MonthlySettlement month
             * @property {string|null} [reward_ujpy] MonthlySettlement reward_ujpy
             * @property {string|null} [system_income_ujpy] MonthlySettlement system_income_ujpy
             * @property {string|null} [purchase_utoken] MonthlySettlement purchase_utoken
             * @property {string|null} [sale_utoken] MonthlySettlement sale_utoken
             */
    
            /**
             * Constructs a new MonthlySettlement.
             * @memberof main
             * @classdesc Represents a MonthlySettlement.
             * @implements IMonthlySettlement
             * @constructor
             * @param {main.IMonthlySettlement=} [properties] Properties to set
             */
            function MonthlySettlement(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }
    
            /**
             * MonthlySettlement id.
             * @member {string} id
             * @memberof main.MonthlySettlement
             * @instance
             */
            MonthlySettlement.prototype.id = "";
    
            /**
             * MonthlySettlement year.
             * @member {string} year
             * @memberof main.MonthlySettlement
             * @instance
             */
            MonthlySettlement.prototype.year = "";
    
            /**
             * MonthlySettlement month.
             * @member {string} month
             * @memberof main.MonthlySettlement
             * @instance
             */
            MonthlySettlement.prototype.month = "";
    
            /**
             * MonthlySettlement reward_ujpy.
             * @member {string} reward_ujpy
             * @memberof main.MonthlySettlement
             * @instance
             */
            MonthlySettlement.prototype.reward_ujpy = "";
    
            /**
             * MonthlySettlement system_income_ujpy.
             * @member {string} system_income_ujpy
             * @memberof main.MonthlySettlement
             * @instance
             */
            MonthlySettlement.prototype.system_income_ujpy = "";
    
            /**
             * MonthlySettlement purchase_utoken.
             * @member {string} purchase_utoken
             * @memberof main.MonthlySettlement
             * @instance
             */
            MonthlySettlement.prototype.purchase_utoken = "";
    
            /**
             * MonthlySettlement sale_utoken.
             * @member {string} sale_utoken
             * @memberof main.MonthlySettlement
             * @instance
             */
            MonthlySettlement.prototype.sale_utoken = "";
    
            /**
             * Encodes the specified MonthlySettlement message. Does not implicitly {@link main.MonthlySettlement.verify|verify} messages.
             * @function encode
             * @memberof main.MonthlySettlement
             * @static
             * @param {main.IMonthlySettlement} message MonthlySettlement message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            MonthlySettlement.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.id != null && Object.hasOwnProperty.call(message, "id"))
                    writer.uint32(/* id 1, wireType 2 =*/10).string(message.id);
                if (message.year != null && Object.hasOwnProperty.call(message, "year"))
                    writer.uint32(/* id 2, wireType 2 =*/18).string(message.year);
                if (message.month != null && Object.hasOwnProperty.call(message, "month"))
                    writer.uint32(/* id 3, wireType 2 =*/26).string(message.month);
                if (message.reward_ujpy != null && Object.hasOwnProperty.call(message, "reward_ujpy"))
                    writer.uint32(/* id 4, wireType 2 =*/34).string(message.reward_ujpy);
                if (message.system_income_ujpy != null && Object.hasOwnProperty.call(message, "system_income_ujpy"))
                    writer.uint32(/* id 5, wireType 2 =*/42).string(message.system_income_ujpy);
                if (message.purchase_utoken != null && Object.hasOwnProperty.call(message, "purchase_utoken"))
                    writer.uint32(/* id 6, wireType 2 =*/50).string(message.purchase_utoken);
                if (message.sale_utoken != null && Object.hasOwnProperty.call(message, "sale_utoken"))
                    writer.uint32(/* id 7, wireType 2 =*/58).string(message.sale_utoken);
                return writer;
            };
    
            /**
             * Encodes the specified MonthlySettlement message, length delimited. Does not implicitly {@link main.MonthlySettlement.verify|verify} messages.
             * @function encodeDelimited
             * @memberof main.MonthlySettlement
             * @static
             * @param {main.IMonthlySettlement} message MonthlySettlement message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            MonthlySettlement.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };
    
            /**
             * Decodes a MonthlySettlement message from the specified reader or buffer.
             * @function decode
             * @memberof main.MonthlySettlement
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {main.MonthlySettlement} MonthlySettlement
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            MonthlySettlement.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.main.MonthlySettlement();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1:
                        message.id = reader.string();
                        break;
                    case 2:
                        message.year = reader.string();
                        break;
                    case 3:
                        message.month = reader.string();
                        break;
                    case 4:
                        message.reward_ujpy = reader.string();
                        break;
                    case 5:
                        message.system_income_ujpy = reader.string();
                        break;
                    case 6:
                        message.purchase_utoken = reader.string();
                        break;
                    case 7:
                        message.sale_utoken = reader.string();
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };
    
            /**
             * Decodes a MonthlySettlement message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof main.MonthlySettlement
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {main.MonthlySettlement} MonthlySettlement
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            MonthlySettlement.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };
    
            /**
             * Verifies a MonthlySettlement message.
             * @function verify
             * @memberof main.MonthlySettlement
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            MonthlySettlement.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.id != null && message.hasOwnProperty("id"))
                    if (!$util.isString(message.id))
                        return "id: string expected";
                if (message.year != null && message.hasOwnProperty("year"))
                    if (!$util.isString(message.year))
                        return "year: string expected";
                if (message.month != null && message.hasOwnProperty("month"))
                    if (!$util.isString(message.month))
                        return "month: string expected";
                if (message.reward_ujpy != null && message.hasOwnProperty("reward_ujpy"))
                    if (!$util.isString(message.reward_ujpy))
                        return "reward_ujpy: string expected";
                if (message.system_income_ujpy != null && message.hasOwnProperty("system_income_ujpy"))
                    if (!$util.isString(message.system_income_ujpy))
                        return "system_income_ujpy: string expected";
                if (message.purchase_utoken != null && message.hasOwnProperty("purchase_utoken"))
                    if (!$util.isString(message.purchase_utoken))
                        return "purchase_utoken: string expected";
                if (message.sale_utoken != null && message.hasOwnProperty("sale_utoken"))
                    if (!$util.isString(message.sale_utoken))
                        return "sale_utoken: string expected";
                return null;
            };
    
            /**
             * Creates a MonthlySettlement message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof main.MonthlySettlement
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {main.MonthlySettlement} MonthlySettlement
             */
            MonthlySettlement.fromObject = function fromObject(object) {
                if (object instanceof $root.main.MonthlySettlement)
                    return object;
                var message = new $root.main.MonthlySettlement();
                if (object.id != null)
                    message.id = String(object.id);
                if (object.year != null)
                    message.year = String(object.year);
                if (object.month != null)
                    message.month = String(object.month);
                if (object.reward_ujpy != null)
                    message.reward_ujpy = String(object.reward_ujpy);
                if (object.system_income_ujpy != null)
                    message.system_income_ujpy = String(object.system_income_ujpy);
                if (object.purchase_utoken != null)
                    message.purchase_utoken = String(object.purchase_utoken);
                if (object.sale_utoken != null)
                    message.sale_utoken = String(object.sale_utoken);
                return message;
            };
    
            /**
             * Creates a plain object from a MonthlySettlement message. Also converts values to other types if specified.
             * @function toObject
             * @memberof main.MonthlySettlement
             * @static
             * @param {main.MonthlySettlement} message MonthlySettlement
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            MonthlySettlement.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (options.defaults) {
                    object.id = "";
                    object.year = "";
                    object.month = "";
                    object.reward_ujpy = "";
                    object.system_income_ujpy = "";
                    object.purchase_utoken = "";
                    object.sale_utoken = "";
                }
                if (message.id != null && message.hasOwnProperty("id"))
                    object.id = message.id;
                if (message.year != null && message.hasOwnProperty("year"))
                    object.year = message.year;
                if (message.month != null && message.hasOwnProperty("month"))
                    object.month = message.month;
                if (message.reward_ujpy != null && message.hasOwnProperty("reward_ujpy"))
                    object.reward_ujpy = message.reward_ujpy;
                if (message.system_income_ujpy != null && message.hasOwnProperty("system_income_ujpy"))
                    object.system_income_ujpy = message.system_income_ujpy;
                if (message.purchase_utoken != null && message.hasOwnProperty("purchase_utoken"))
                    object.purchase_utoken = message.purchase_utoken;
                if (message.sale_utoken != null && message.hasOwnProperty("sale_utoken"))
                    object.sale_utoken = message.sale_utoken;
                return object;
            };
    
            /**
             * Converts this MonthlySettlement to JSON.
             * @function toJSON
             * @memberof main.MonthlySettlement
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            MonthlySettlement.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };
    
            return MonthlySettlement;
        })();
    
        main.MonthlyUsage = (function() {
    
            /**
             * Properties of a MonthlyUsage.
             * @memberof main
             * @interface IMonthlyUsage
             * @property {string|null} [id] MonthlyUsage id
             * @property {string|null} [student_account_id] MonthlyUsage student_account_id
             * @property {string|null} [year] MonthlyUsage year
             * @property {string|null} [month] MonthlyUsage month
             * @property {string|null} [amount_mwh] MonthlyUsage amount_mwh
             */
    
            /**
             * Constructs a new MonthlyUsage.
             * @memberof main
             * @classdesc Represents a MonthlyUsage.
             * @implements IMonthlyUsage
             * @constructor
             * @param {main.IMonthlyUsage=} [properties] Properties to set
             */
            function MonthlyUsage(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }
    
            /**
             * MonthlyUsage id.
             * @member {string} id
             * @memberof main.MonthlyUsage
             * @instance
             */
            MonthlyUsage.prototype.id = "";
    
            /**
             * MonthlyUsage student_account_id.
             * @member {string} student_account_id
             * @memberof main.MonthlyUsage
             * @instance
             */
            MonthlyUsage.prototype.student_account_id = "";
    
            /**
             * MonthlyUsage year.
             * @member {string} year
             * @memberof main.MonthlyUsage
             * @instance
             */
            MonthlyUsage.prototype.year = "";
    
            /**
             * MonthlyUsage month.
             * @member {string} month
             * @memberof main.MonthlyUsage
             * @instance
             */
            MonthlyUsage.prototype.month = "";
    
            /**
             * MonthlyUsage amount_mwh.
             * @member {string} amount_mwh
             * @memberof main.MonthlyUsage
             * @instance
             */
            MonthlyUsage.prototype.amount_mwh = "";
    
            /**
             * Encodes the specified MonthlyUsage message. Does not implicitly {@link main.MonthlyUsage.verify|verify} messages.
             * @function encode
             * @memberof main.MonthlyUsage
             * @static
             * @param {main.IMonthlyUsage} message MonthlyUsage message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            MonthlyUsage.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.id != null && Object.hasOwnProperty.call(message, "id"))
                    writer.uint32(/* id 1, wireType 2 =*/10).string(message.id);
                if (message.student_account_id != null && Object.hasOwnProperty.call(message, "student_account_id"))
                    writer.uint32(/* id 2, wireType 2 =*/18).string(message.student_account_id);
                if (message.year != null && Object.hasOwnProperty.call(message, "year"))
                    writer.uint32(/* id 3, wireType 2 =*/26).string(message.year);
                if (message.month != null && Object.hasOwnProperty.call(message, "month"))
                    writer.uint32(/* id 4, wireType 2 =*/34).string(message.month);
                if (message.amount_mwh != null && Object.hasOwnProperty.call(message, "amount_mwh"))
                    writer.uint32(/* id 5, wireType 2 =*/42).string(message.amount_mwh);
                return writer;
            };
    
            /**
             * Encodes the specified MonthlyUsage message, length delimited. Does not implicitly {@link main.MonthlyUsage.verify|verify} messages.
             * @function encodeDelimited
             * @memberof main.MonthlyUsage
             * @static
             * @param {main.IMonthlyUsage} message MonthlyUsage message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            MonthlyUsage.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };
    
            /**
             * Decodes a MonthlyUsage message from the specified reader or buffer.
             * @function decode
             * @memberof main.MonthlyUsage
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {main.MonthlyUsage} MonthlyUsage
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            MonthlyUsage.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.main.MonthlyUsage();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1:
                        message.id = reader.string();
                        break;
                    case 2:
                        message.student_account_id = reader.string();
                        break;
                    case 3:
                        message.year = reader.string();
                        break;
                    case 4:
                        message.month = reader.string();
                        break;
                    case 5:
                        message.amount_mwh = reader.string();
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };
    
            /**
             * Decodes a MonthlyUsage message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof main.MonthlyUsage
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {main.MonthlyUsage} MonthlyUsage
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            MonthlyUsage.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };
    
            /**
             * Verifies a MonthlyUsage message.
             * @function verify
             * @memberof main.MonthlyUsage
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            MonthlyUsage.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.id != null && message.hasOwnProperty("id"))
                    if (!$util.isString(message.id))
                        return "id: string expected";
                if (message.student_account_id != null && message.hasOwnProperty("student_account_id"))
                    if (!$util.isString(message.student_account_id))
                        return "student_account_id: string expected";
                if (message.year != null && message.hasOwnProperty("year"))
                    if (!$util.isString(message.year))
                        return "year: string expected";
                if (message.month != null && message.hasOwnProperty("month"))
                    if (!$util.isString(message.month))
                        return "month: string expected";
                if (message.amount_mwh != null && message.hasOwnProperty("amount_mwh"))
                    if (!$util.isString(message.amount_mwh))
                        return "amount_mwh: string expected";
                return null;
            };
    
            /**
             * Creates a MonthlyUsage message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof main.MonthlyUsage
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {main.MonthlyUsage} MonthlyUsage
             */
            MonthlyUsage.fromObject = function fromObject(object) {
                if (object instanceof $root.main.MonthlyUsage)
                    return object;
                var message = new $root.main.MonthlyUsage();
                if (object.id != null)
                    message.id = String(object.id);
                if (object.student_account_id != null)
                    message.student_account_id = String(object.student_account_id);
                if (object.year != null)
                    message.year = String(object.year);
                if (object.month != null)
                    message.month = String(object.month);
                if (object.amount_mwh != null)
                    message.amount_mwh = String(object.amount_mwh);
                return message;
            };
    
            /**
             * Creates a plain object from a MonthlyUsage message. Also converts values to other types if specified.
             * @function toObject
             * @memberof main.MonthlyUsage
             * @static
             * @param {main.MonthlyUsage} message MonthlyUsage
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            MonthlyUsage.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (options.defaults) {
                    object.id = "";
                    object.student_account_id = "";
                    object.year = "";
                    object.month = "";
                    object.amount_mwh = "";
                }
                if (message.id != null && message.hasOwnProperty("id"))
                    object.id = message.id;
                if (message.student_account_id != null && message.hasOwnProperty("student_account_id"))
                    object.student_account_id = message.student_account_id;
                if (message.year != null && message.hasOwnProperty("year"))
                    object.year = message.year;
                if (message.month != null && message.hasOwnProperty("month"))
                    object.month = message.month;
                if (message.amount_mwh != null && message.hasOwnProperty("amount_mwh"))
                    object.amount_mwh = message.amount_mwh;
                return object;
            };
    
            /**
             * Converts this MonthlyUsage to JSON.
             * @function toJSON
             * @memberof main.MonthlyUsage
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            MonthlyUsage.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };
    
            return MonthlyUsage;
        })();
    
        main.NormalAskDelete = (function() {
    
            /**
             * Properties of a NormalAskDelete.
             * @memberof main
             * @interface INormalAskDelete
             * @property {string|null} [id] NormalAskDelete id
             * @property {string|null} [ask_id] NormalAskDelete ask_id
             */
    
            /**
             * Constructs a new NormalAskDelete.
             * @memberof main
             * @classdesc Represents a NormalAskDelete.
             * @implements INormalAskDelete
             * @constructor
             * @param {main.INormalAskDelete=} [properties] Properties to set
             */
            function NormalAskDelete(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }
    
            /**
             * NormalAskDelete id.
             * @member {string} id
             * @memberof main.NormalAskDelete
             * @instance
             */
            NormalAskDelete.prototype.id = "";
    
            /**
             * NormalAskDelete ask_id.
             * @member {string} ask_id
             * @memberof main.NormalAskDelete
             * @instance
             */
            NormalAskDelete.prototype.ask_id = "";
    
            /**
             * Encodes the specified NormalAskDelete message. Does not implicitly {@link main.NormalAskDelete.verify|verify} messages.
             * @function encode
             * @memberof main.NormalAskDelete
             * @static
             * @param {main.INormalAskDelete} message NormalAskDelete message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            NormalAskDelete.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.id != null && Object.hasOwnProperty.call(message, "id"))
                    writer.uint32(/* id 1, wireType 2 =*/10).string(message.id);
                if (message.ask_id != null && Object.hasOwnProperty.call(message, "ask_id"))
                    writer.uint32(/* id 2, wireType 2 =*/18).string(message.ask_id);
                return writer;
            };
    
            /**
             * Encodes the specified NormalAskDelete message, length delimited. Does not implicitly {@link main.NormalAskDelete.verify|verify} messages.
             * @function encodeDelimited
             * @memberof main.NormalAskDelete
             * @static
             * @param {main.INormalAskDelete} message NormalAskDelete message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            NormalAskDelete.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };
    
            /**
             * Decodes a NormalAskDelete message from the specified reader or buffer.
             * @function decode
             * @memberof main.NormalAskDelete
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {main.NormalAskDelete} NormalAskDelete
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            NormalAskDelete.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.main.NormalAskDelete();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1:
                        message.id = reader.string();
                        break;
                    case 2:
                        message.ask_id = reader.string();
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };
    
            /**
             * Decodes a NormalAskDelete message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof main.NormalAskDelete
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {main.NormalAskDelete} NormalAskDelete
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            NormalAskDelete.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };
    
            /**
             * Verifies a NormalAskDelete message.
             * @function verify
             * @memberof main.NormalAskDelete
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            NormalAskDelete.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.id != null && message.hasOwnProperty("id"))
                    if (!$util.isString(message.id))
                        return "id: string expected";
                if (message.ask_id != null && message.hasOwnProperty("ask_id"))
                    if (!$util.isString(message.ask_id))
                        return "ask_id: string expected";
                return null;
            };
    
            /**
             * Creates a NormalAskDelete message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof main.NormalAskDelete
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {main.NormalAskDelete} NormalAskDelete
             */
            NormalAskDelete.fromObject = function fromObject(object) {
                if (object instanceof $root.main.NormalAskDelete)
                    return object;
                var message = new $root.main.NormalAskDelete();
                if (object.id != null)
                    message.id = String(object.id);
                if (object.ask_id != null)
                    message.ask_id = String(object.ask_id);
                return message;
            };
    
            /**
             * Creates a plain object from a NormalAskDelete message. Also converts values to other types if specified.
             * @function toObject
             * @memberof main.NormalAskDelete
             * @static
             * @param {main.NormalAskDelete} message NormalAskDelete
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            NormalAskDelete.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (options.defaults) {
                    object.id = "";
                    object.ask_id = "";
                }
                if (message.id != null && message.hasOwnProperty("id"))
                    object.id = message.id;
                if (message.ask_id != null && message.hasOwnProperty("ask_id"))
                    object.ask_id = message.ask_id;
                return object;
            };
    
            /**
             * Converts this NormalAskDelete to JSON.
             * @function toJSON
             * @memberof main.NormalAskDelete
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            NormalAskDelete.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };
    
            return NormalAskDelete;
        })();
    
        main.NormalBidHistory = (function() {
    
            /**
             * Properties of a NormalBidHistory.
             * @memberof main
             * @interface INormalBidHistory
             * @property {string|null} [id] NormalBidHistory id
             * @property {string|null} [account_id] NormalBidHistory account_id
             * @property {string|null} [price_ujpy] NormalBidHistory price_ujpy
             * @property {string|null} [amount_uupx] NormalBidHistory amount_uupx
             * @property {boolean|null} [is_accepted] NormalBidHistory is_accepted
             * @property {string|null} [contract_price_ujpy] NormalBidHistory contract_price_ujpy
             * @property {boolean|null} [is_auto_order] NormalBidHistory is_auto_order
             */
    
            /**
             * Constructs a new NormalBidHistory.
             * @memberof main
             * @classdesc Represents a NormalBidHistory.
             * @implements INormalBidHistory
             * @constructor
             * @param {main.INormalBidHistory=} [properties] Properties to set
             */
            function NormalBidHistory(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }
    
            /**
             * NormalBidHistory id.
             * @member {string} id
             * @memberof main.NormalBidHistory
             * @instance
             */
            NormalBidHistory.prototype.id = "";
    
            /**
             * NormalBidHistory account_id.
             * @member {string} account_id
             * @memberof main.NormalBidHistory
             * @instance
             */
            NormalBidHistory.prototype.account_id = "";
    
            /**
             * NormalBidHistory price_ujpy.
             * @member {string} price_ujpy
             * @memberof main.NormalBidHistory
             * @instance
             */
            NormalBidHistory.prototype.price_ujpy = "";
    
            /**
             * NormalBidHistory amount_uupx.
             * @member {string} amount_uupx
             * @memberof main.NormalBidHistory
             * @instance
             */
            NormalBidHistory.prototype.amount_uupx = "";
    
            /**
             * NormalBidHistory is_accepted.
             * @member {boolean} is_accepted
             * @memberof main.NormalBidHistory
             * @instance
             */
            NormalBidHistory.prototype.is_accepted = false;
    
            /**
             * NormalBidHistory contract_price_ujpy.
             * @member {string} contract_price_ujpy
             * @memberof main.NormalBidHistory
             * @instance
             */
            NormalBidHistory.prototype.contract_price_ujpy = "";
    
            /**
             * NormalBidHistory is_auto_order.
             * @member {boolean} is_auto_order
             * @memberof main.NormalBidHistory
             * @instance
             */
            NormalBidHistory.prototype.is_auto_order = false;
    
            /**
             * Encodes the specified NormalBidHistory message. Does not implicitly {@link main.NormalBidHistory.verify|verify} messages.
             * @function encode
             * @memberof main.NormalBidHistory
             * @static
             * @param {main.INormalBidHistory} message NormalBidHistory message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            NormalBidHistory.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.id != null && Object.hasOwnProperty.call(message, "id"))
                    writer.uint32(/* id 1, wireType 2 =*/10).string(message.id);
                if (message.account_id != null && Object.hasOwnProperty.call(message, "account_id"))
                    writer.uint32(/* id 2, wireType 2 =*/18).string(message.account_id);
                if (message.price_ujpy != null && Object.hasOwnProperty.call(message, "price_ujpy"))
                    writer.uint32(/* id 3, wireType 2 =*/26).string(message.price_ujpy);
                if (message.amount_uupx != null && Object.hasOwnProperty.call(message, "amount_uupx"))
                    writer.uint32(/* id 4, wireType 2 =*/34).string(message.amount_uupx);
                if (message.is_accepted != null && Object.hasOwnProperty.call(message, "is_accepted"))
                    writer.uint32(/* id 5, wireType 0 =*/40).bool(message.is_accepted);
                if (message.contract_price_ujpy != null && Object.hasOwnProperty.call(message, "contract_price_ujpy"))
                    writer.uint32(/* id 6, wireType 2 =*/50).string(message.contract_price_ujpy);
                if (message.is_auto_order != null && Object.hasOwnProperty.call(message, "is_auto_order"))
                    writer.uint32(/* id 7, wireType 0 =*/56).bool(message.is_auto_order);
                return writer;
            };
    
            /**
             * Encodes the specified NormalBidHistory message, length delimited. Does not implicitly {@link main.NormalBidHistory.verify|verify} messages.
             * @function encodeDelimited
             * @memberof main.NormalBidHistory
             * @static
             * @param {main.INormalBidHistory} message NormalBidHistory message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            NormalBidHistory.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };
    
            /**
             * Decodes a NormalBidHistory message from the specified reader or buffer.
             * @function decode
             * @memberof main.NormalBidHistory
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {main.NormalBidHistory} NormalBidHistory
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            NormalBidHistory.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.main.NormalBidHistory();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1:
                        message.id = reader.string();
                        break;
                    case 2:
                        message.account_id = reader.string();
                        break;
                    case 3:
                        message.price_ujpy = reader.string();
                        break;
                    case 4:
                        message.amount_uupx = reader.string();
                        break;
                    case 5:
                        message.is_accepted = reader.bool();
                        break;
                    case 6:
                        message.contract_price_ujpy = reader.string();
                        break;
                    case 7:
                        message.is_auto_order = reader.bool();
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };
    
            /**
             * Decodes a NormalBidHistory message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof main.NormalBidHistory
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {main.NormalBidHistory} NormalBidHistory
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            NormalBidHistory.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };
    
            /**
             * Verifies a NormalBidHistory message.
             * @function verify
             * @memberof main.NormalBidHistory
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            NormalBidHistory.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.id != null && message.hasOwnProperty("id"))
                    if (!$util.isString(message.id))
                        return "id: string expected";
                if (message.account_id != null && message.hasOwnProperty("account_id"))
                    if (!$util.isString(message.account_id))
                        return "account_id: string expected";
                if (message.price_ujpy != null && message.hasOwnProperty("price_ujpy"))
                    if (!$util.isString(message.price_ujpy))
                        return "price_ujpy: string expected";
                if (message.amount_uupx != null && message.hasOwnProperty("amount_uupx"))
                    if (!$util.isString(message.amount_uupx))
                        return "amount_uupx: string expected";
                if (message.is_accepted != null && message.hasOwnProperty("is_accepted"))
                    if (typeof message.is_accepted !== "boolean")
                        return "is_accepted: boolean expected";
                if (message.contract_price_ujpy != null && message.hasOwnProperty("contract_price_ujpy"))
                    if (!$util.isString(message.contract_price_ujpy))
                        return "contract_price_ujpy: string expected";
                if (message.is_auto_order != null && message.hasOwnProperty("is_auto_order"))
                    if (typeof message.is_auto_order !== "boolean")
                        return "is_auto_order: boolean expected";
                return null;
            };
    
            /**
             * Creates a NormalBidHistory message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof main.NormalBidHistory
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {main.NormalBidHistory} NormalBidHistory
             */
            NormalBidHistory.fromObject = function fromObject(object) {
                if (object instanceof $root.main.NormalBidHistory)
                    return object;
                var message = new $root.main.NormalBidHistory();
                if (object.id != null)
                    message.id = String(object.id);
                if (object.account_id != null)
                    message.account_id = String(object.account_id);
                if (object.price_ujpy != null)
                    message.price_ujpy = String(object.price_ujpy);
                if (object.amount_uupx != null)
                    message.amount_uupx = String(object.amount_uupx);
                if (object.is_accepted != null)
                    message.is_accepted = Boolean(object.is_accepted);
                if (object.contract_price_ujpy != null)
                    message.contract_price_ujpy = String(object.contract_price_ujpy);
                if (object.is_auto_order != null)
                    message.is_auto_order = Boolean(object.is_auto_order);
                return message;
            };
    
            /**
             * Creates a plain object from a NormalBidHistory message. Also converts values to other types if specified.
             * @function toObject
             * @memberof main.NormalBidHistory
             * @static
             * @param {main.NormalBidHistory} message NormalBidHistory
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            NormalBidHistory.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (options.defaults) {
                    object.id = "";
                    object.account_id = "";
                    object.price_ujpy = "";
                    object.amount_uupx = "";
                    object.is_accepted = false;
                    object.contract_price_ujpy = "";
                    object.is_auto_order = false;
                }
                if (message.id != null && message.hasOwnProperty("id"))
                    object.id = message.id;
                if (message.account_id != null && message.hasOwnProperty("account_id"))
                    object.account_id = message.account_id;
                if (message.price_ujpy != null && message.hasOwnProperty("price_ujpy"))
                    object.price_ujpy = message.price_ujpy;
                if (message.amount_uupx != null && message.hasOwnProperty("amount_uupx"))
                    object.amount_uupx = message.amount_uupx;
                if (message.is_accepted != null && message.hasOwnProperty("is_accepted"))
                    object.is_accepted = message.is_accepted;
                if (message.contract_price_ujpy != null && message.hasOwnProperty("contract_price_ujpy"))
                    object.contract_price_ujpy = message.contract_price_ujpy;
                if (message.is_auto_order != null && message.hasOwnProperty("is_auto_order"))
                    object.is_auto_order = message.is_auto_order;
                return object;
            };
    
            /**
             * Converts this NormalBidHistory to JSON.
             * @function toJSON
             * @memberof main.NormalBidHistory
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            NormalBidHistory.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };
    
            return NormalBidHistory;
        })();
    
        /**
         * NormalAskHistoryType enum.
         * @name main.NormalAskHistoryType
         * @enum {number}
         * @property {number} UNKNOWN=0 UNKNOWN value
         * @property {number} PRIMARYADDITIONAL=1 PRIMARYADDITIONAL value
         * @property {number} SECONDARY=2 SECONDARY value
         */
        main.NormalAskHistoryType = (function() {
            var valuesById = {}, values = Object.create(valuesById);
            values[valuesById[0] = "UNKNOWN"] = 0;
            values[valuesById[1] = "PRIMARYADDITIONAL"] = 1;
            values[valuesById[2] = "SECONDARY"] = 2;
            return values;
        })();
    
        main.NormalAskHistory = (function() {
    
            /**
             * Properties of a NormalAskHistory.
             * @memberof main
             * @interface INormalAskHistory
             * @property {string|null} [id] NormalAskHistory id
             * @property {main.NormalAskHistoryType|null} [type] NormalAskHistory type
             * @property {string|null} [account_id] NormalAskHistory account_id
             * @property {string|null} [price_ujpy] NormalAskHistory price_ujpy
             * @property {string|null} [amount_uupx] NormalAskHistory amount_uupx
             * @property {boolean|null} [is_accepted] NormalAskHistory is_accepted
             * @property {string|null} [contract_price_ujpy] NormalAskHistory contract_price_ujpy
             * @property {boolean|null} [is_auto_order] NormalAskHistory is_auto_order
             */
    
            /**
             * Constructs a new NormalAskHistory.
             * @memberof main
             * @classdesc Represents a NormalAskHistory.
             * @implements INormalAskHistory
             * @constructor
             * @param {main.INormalAskHistory=} [properties] Properties to set
             */
            function NormalAskHistory(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }
    
            /**
             * NormalAskHistory id.
             * @member {string} id
             * @memberof main.NormalAskHistory
             * @instance
             */
            NormalAskHistory.prototype.id = "";
    
            /**
             * NormalAskHistory type.
             * @member {main.NormalAskHistoryType} type
             * @memberof main.NormalAskHistory
             * @instance
             */
            NormalAskHistory.prototype.type = 0;
    
            /**
             * NormalAskHistory account_id.
             * @member {string} account_id
             * @memberof main.NormalAskHistory
             * @instance
             */
            NormalAskHistory.prototype.account_id = "";
    
            /**
             * NormalAskHistory price_ujpy.
             * @member {string} price_ujpy
             * @memberof main.NormalAskHistory
             * @instance
             */
            NormalAskHistory.prototype.price_ujpy = "";
    
            /**
             * NormalAskHistory amount_uupx.
             * @member {string} amount_uupx
             * @memberof main.NormalAskHistory
             * @instance
             */
            NormalAskHistory.prototype.amount_uupx = "";
    
            /**
             * NormalAskHistory is_accepted.
             * @member {boolean} is_accepted
             * @memberof main.NormalAskHistory
             * @instance
             */
            NormalAskHistory.prototype.is_accepted = false;
    
            /**
             * NormalAskHistory contract_price_ujpy.
             * @member {string} contract_price_ujpy
             * @memberof main.NormalAskHistory
             * @instance
             */
            NormalAskHistory.prototype.contract_price_ujpy = "";
    
            /**
             * NormalAskHistory is_auto_order.
             * @member {boolean} is_auto_order
             * @memberof main.NormalAskHistory
             * @instance
             */
            NormalAskHistory.prototype.is_auto_order = false;
    
            /**
             * Encodes the specified NormalAskHistory message. Does not implicitly {@link main.NormalAskHistory.verify|verify} messages.
             * @function encode
             * @memberof main.NormalAskHistory
             * @static
             * @param {main.INormalAskHistory} message NormalAskHistory message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            NormalAskHistory.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.id != null && Object.hasOwnProperty.call(message, "id"))
                    writer.uint32(/* id 1, wireType 2 =*/10).string(message.id);
                if (message.type != null && Object.hasOwnProperty.call(message, "type"))
                    writer.uint32(/* id 2, wireType 0 =*/16).int32(message.type);
                if (message.account_id != null && Object.hasOwnProperty.call(message, "account_id"))
                    writer.uint32(/* id 3, wireType 2 =*/26).string(message.account_id);
                if (message.price_ujpy != null && Object.hasOwnProperty.call(message, "price_ujpy"))
                    writer.uint32(/* id 4, wireType 2 =*/34).string(message.price_ujpy);
                if (message.amount_uupx != null && Object.hasOwnProperty.call(message, "amount_uupx"))
                    writer.uint32(/* id 5, wireType 2 =*/42).string(message.amount_uupx);
                if (message.is_accepted != null && Object.hasOwnProperty.call(message, "is_accepted"))
                    writer.uint32(/* id 6, wireType 0 =*/48).bool(message.is_accepted);
                if (message.contract_price_ujpy != null && Object.hasOwnProperty.call(message, "contract_price_ujpy"))
                    writer.uint32(/* id 7, wireType 2 =*/58).string(message.contract_price_ujpy);
                if (message.is_auto_order != null && Object.hasOwnProperty.call(message, "is_auto_order"))
                    writer.uint32(/* id 8, wireType 0 =*/64).bool(message.is_auto_order);
                return writer;
            };
    
            /**
             * Encodes the specified NormalAskHistory message, length delimited. Does not implicitly {@link main.NormalAskHistory.verify|verify} messages.
             * @function encodeDelimited
             * @memberof main.NormalAskHistory
             * @static
             * @param {main.INormalAskHistory} message NormalAskHistory message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            NormalAskHistory.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };
    
            /**
             * Decodes a NormalAskHistory message from the specified reader or buffer.
             * @function decode
             * @memberof main.NormalAskHistory
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {main.NormalAskHistory} NormalAskHistory
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            NormalAskHistory.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.main.NormalAskHistory();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1:
                        message.id = reader.string();
                        break;
                    case 2:
                        message.type = reader.int32();
                        break;
                    case 3:
                        message.account_id = reader.string();
                        break;
                    case 4:
                        message.price_ujpy = reader.string();
                        break;
                    case 5:
                        message.amount_uupx = reader.string();
                        break;
                    case 6:
                        message.is_accepted = reader.bool();
                        break;
                    case 7:
                        message.contract_price_ujpy = reader.string();
                        break;
                    case 8:
                        message.is_auto_order = reader.bool();
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };
    
            /**
             * Decodes a NormalAskHistory message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof main.NormalAskHistory
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {main.NormalAskHistory} NormalAskHistory
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            NormalAskHistory.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };
    
            /**
             * Verifies a NormalAskHistory message.
             * @function verify
             * @memberof main.NormalAskHistory
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            NormalAskHistory.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.id != null && message.hasOwnProperty("id"))
                    if (!$util.isString(message.id))
                        return "id: string expected";
                if (message.type != null && message.hasOwnProperty("type"))
                    switch (message.type) {
                    default:
                        return "type: enum value expected";
                    case 0:
                    case 1:
                    case 2:
                        break;
                    }
                if (message.account_id != null && message.hasOwnProperty("account_id"))
                    if (!$util.isString(message.account_id))
                        return "account_id: string expected";
                if (message.price_ujpy != null && message.hasOwnProperty("price_ujpy"))
                    if (!$util.isString(message.price_ujpy))
                        return "price_ujpy: string expected";
                if (message.amount_uupx != null && message.hasOwnProperty("amount_uupx"))
                    if (!$util.isString(message.amount_uupx))
                        return "amount_uupx: string expected";
                if (message.is_accepted != null && message.hasOwnProperty("is_accepted"))
                    if (typeof message.is_accepted !== "boolean")
                        return "is_accepted: boolean expected";
                if (message.contract_price_ujpy != null && message.hasOwnProperty("contract_price_ujpy"))
                    if (!$util.isString(message.contract_price_ujpy))
                        return "contract_price_ujpy: string expected";
                if (message.is_auto_order != null && message.hasOwnProperty("is_auto_order"))
                    if (typeof message.is_auto_order !== "boolean")
                        return "is_auto_order: boolean expected";
                return null;
            };
    
            /**
             * Creates a NormalAskHistory message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof main.NormalAskHistory
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {main.NormalAskHistory} NormalAskHistory
             */
            NormalAskHistory.fromObject = function fromObject(object) {
                if (object instanceof $root.main.NormalAskHistory)
                    return object;
                var message = new $root.main.NormalAskHistory();
                if (object.id != null)
                    message.id = String(object.id);
                switch (object.type) {
                case "UNKNOWN":
                case 0:
                    message.type = 0;
                    break;
                case "PRIMARYADDITIONAL":
                case 1:
                    message.type = 1;
                    break;
                case "SECONDARY":
                case 2:
                    message.type = 2;
                    break;
                }
                if (object.account_id != null)
                    message.account_id = String(object.account_id);
                if (object.price_ujpy != null)
                    message.price_ujpy = String(object.price_ujpy);
                if (object.amount_uupx != null)
                    message.amount_uupx = String(object.amount_uupx);
                if (object.is_accepted != null)
                    message.is_accepted = Boolean(object.is_accepted);
                if (object.contract_price_ujpy != null)
                    message.contract_price_ujpy = String(object.contract_price_ujpy);
                if (object.is_auto_order != null)
                    message.is_auto_order = Boolean(object.is_auto_order);
                return message;
            };
    
            /**
             * Creates a plain object from a NormalAskHistory message. Also converts values to other types if specified.
             * @function toObject
             * @memberof main.NormalAskHistory
             * @static
             * @param {main.NormalAskHistory} message NormalAskHistory
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            NormalAskHistory.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (options.defaults) {
                    object.id = "";
                    object.type = options.enums === String ? "UNKNOWN" : 0;
                    object.account_id = "";
                    object.price_ujpy = "";
                    object.amount_uupx = "";
                    object.is_accepted = false;
                    object.contract_price_ujpy = "";
                    object.is_auto_order = false;
                }
                if (message.id != null && message.hasOwnProperty("id"))
                    object.id = message.id;
                if (message.type != null && message.hasOwnProperty("type"))
                    object.type = options.enums === String ? $root.main.NormalAskHistoryType[message.type] : message.type;
                if (message.account_id != null && message.hasOwnProperty("account_id"))
                    object.account_id = message.account_id;
                if (message.price_ujpy != null && message.hasOwnProperty("price_ujpy"))
                    object.price_ujpy = message.price_ujpy;
                if (message.amount_uupx != null && message.hasOwnProperty("amount_uupx"))
                    object.amount_uupx = message.amount_uupx;
                if (message.is_accepted != null && message.hasOwnProperty("is_accepted"))
                    object.is_accepted = message.is_accepted;
                if (message.contract_price_ujpy != null && message.hasOwnProperty("contract_price_ujpy"))
                    object.contract_price_ujpy = message.contract_price_ujpy;
                if (message.is_auto_order != null && message.hasOwnProperty("is_auto_order"))
                    object.is_auto_order = message.is_auto_order;
                return object;
            };
    
            /**
             * Converts this NormalAskHistory to JSON.
             * @function toJSON
             * @memberof main.NormalAskHistory
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            NormalAskHistory.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };
    
            return NormalAskHistory;
        })();
    
        main.NormalAskSetting = (function() {
    
            /**
             * Properties of a NormalAskSetting.
             * @memberof main
             * @interface INormalAskSetting
             * @property {string|null} [id] NormalAskSetting id
             * @property {string|null} [price_ujpy] NormalAskSetting price_ujpy
             * @property {string|null} [amount_uupx] NormalAskSetting amount_uupx
             * @property {string|null} [ratio_percentage] NormalAskSetting ratio_percentage
             * @property {boolean|null} [enable] NormalAskSetting enable
             */
    
            /**
             * Constructs a new NormalAskSetting.
             * @memberof main
             * @classdesc Represents a NormalAskSetting.
             * @implements INormalAskSetting
             * @constructor
             * @param {main.INormalAskSetting=} [properties] Properties to set
             */
            function NormalAskSetting(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }
    
            /**
             * NormalAskSetting id.
             * @member {string} id
             * @memberof main.NormalAskSetting
             * @instance
             */
            NormalAskSetting.prototype.id = "";
    
            /**
             * NormalAskSetting price_ujpy.
             * @member {string} price_ujpy
             * @memberof main.NormalAskSetting
             * @instance
             */
            NormalAskSetting.prototype.price_ujpy = "";
    
            /**
             * NormalAskSetting amount_uupx.
             * @member {string} amount_uupx
             * @memberof main.NormalAskSetting
             * @instance
             */
            NormalAskSetting.prototype.amount_uupx = "";
    
            /**
             * NormalAskSetting ratio_percentage.
             * @member {string} ratio_percentage
             * @memberof main.NormalAskSetting
             * @instance
             */
            NormalAskSetting.prototype.ratio_percentage = "";
    
            /**
             * NormalAskSetting enable.
             * @member {boolean} enable
             * @memberof main.NormalAskSetting
             * @instance
             */
            NormalAskSetting.prototype.enable = false;
    
            /**
             * Encodes the specified NormalAskSetting message. Does not implicitly {@link main.NormalAskSetting.verify|verify} messages.
             * @function encode
             * @memberof main.NormalAskSetting
             * @static
             * @param {main.INormalAskSetting} message NormalAskSetting message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            NormalAskSetting.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.id != null && Object.hasOwnProperty.call(message, "id"))
                    writer.uint32(/* id 1, wireType 2 =*/10).string(message.id);
                if (message.price_ujpy != null && Object.hasOwnProperty.call(message, "price_ujpy"))
                    writer.uint32(/* id 2, wireType 2 =*/18).string(message.price_ujpy);
                if (message.amount_uupx != null && Object.hasOwnProperty.call(message, "amount_uupx"))
                    writer.uint32(/* id 3, wireType 2 =*/26).string(message.amount_uupx);
                if (message.ratio_percentage != null && Object.hasOwnProperty.call(message, "ratio_percentage"))
                    writer.uint32(/* id 4, wireType 2 =*/34).string(message.ratio_percentage);
                if (message.enable != null && Object.hasOwnProperty.call(message, "enable"))
                    writer.uint32(/* id 5, wireType 0 =*/40).bool(message.enable);
                return writer;
            };
    
            /**
             * Encodes the specified NormalAskSetting message, length delimited. Does not implicitly {@link main.NormalAskSetting.verify|verify} messages.
             * @function encodeDelimited
             * @memberof main.NormalAskSetting
             * @static
             * @param {main.INormalAskSetting} message NormalAskSetting message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            NormalAskSetting.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };
    
            /**
             * Decodes a NormalAskSetting message from the specified reader or buffer.
             * @function decode
             * @memberof main.NormalAskSetting
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {main.NormalAskSetting} NormalAskSetting
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            NormalAskSetting.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.main.NormalAskSetting();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1:
                        message.id = reader.string();
                        break;
                    case 2:
                        message.price_ujpy = reader.string();
                        break;
                    case 3:
                        message.amount_uupx = reader.string();
                        break;
                    case 4:
                        message.ratio_percentage = reader.string();
                        break;
                    case 5:
                        message.enable = reader.bool();
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };
    
            /**
             * Decodes a NormalAskSetting message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof main.NormalAskSetting
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {main.NormalAskSetting} NormalAskSetting
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            NormalAskSetting.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };
    
            /**
             * Verifies a NormalAskSetting message.
             * @function verify
             * @memberof main.NormalAskSetting
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            NormalAskSetting.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.id != null && message.hasOwnProperty("id"))
                    if (!$util.isString(message.id))
                        return "id: string expected";
                if (message.price_ujpy != null && message.hasOwnProperty("price_ujpy"))
                    if (!$util.isString(message.price_ujpy))
                        return "price_ujpy: string expected";
                if (message.amount_uupx != null && message.hasOwnProperty("amount_uupx"))
                    if (!$util.isString(message.amount_uupx))
                        return "amount_uupx: string expected";
                if (message.ratio_percentage != null && message.hasOwnProperty("ratio_percentage"))
                    if (!$util.isString(message.ratio_percentage))
                        return "ratio_percentage: string expected";
                if (message.enable != null && message.hasOwnProperty("enable"))
                    if (typeof message.enable !== "boolean")
                        return "enable: boolean expected";
                return null;
            };
    
            /**
             * Creates a NormalAskSetting message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof main.NormalAskSetting
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {main.NormalAskSetting} NormalAskSetting
             */
            NormalAskSetting.fromObject = function fromObject(object) {
                if (object instanceof $root.main.NormalAskSetting)
                    return object;
                var message = new $root.main.NormalAskSetting();
                if (object.id != null)
                    message.id = String(object.id);
                if (object.price_ujpy != null)
                    message.price_ujpy = String(object.price_ujpy);
                if (object.amount_uupx != null)
                    message.amount_uupx = String(object.amount_uupx);
                if (object.ratio_percentage != null)
                    message.ratio_percentage = String(object.ratio_percentage);
                if (object.enable != null)
                    message.enable = Boolean(object.enable);
                return message;
            };
    
            /**
             * Creates a plain object from a NormalAskSetting message. Also converts values to other types if specified.
             * @function toObject
             * @memberof main.NormalAskSetting
             * @static
             * @param {main.NormalAskSetting} message NormalAskSetting
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            NormalAskSetting.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (options.defaults) {
                    object.id = "";
                    object.price_ujpy = "";
                    object.amount_uupx = "";
                    object.ratio_percentage = "";
                    object.enable = false;
                }
                if (message.id != null && message.hasOwnProperty("id"))
                    object.id = message.id;
                if (message.price_ujpy != null && message.hasOwnProperty("price_ujpy"))
                    object.price_ujpy = message.price_ujpy;
                if (message.amount_uupx != null && message.hasOwnProperty("amount_uupx"))
                    object.amount_uupx = message.amount_uupx;
                if (message.ratio_percentage != null && message.hasOwnProperty("ratio_percentage"))
                    object.ratio_percentage = message.ratio_percentage;
                if (message.enable != null && message.hasOwnProperty("enable"))
                    object.enable = message.enable;
                return object;
            };
    
            /**
             * Converts this NormalAskSetting to JSON.
             * @function toJSON
             * @memberof main.NormalAskSetting
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            NormalAskSetting.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };
    
            return NormalAskSetting;
        })();
    
        /**
         * NormalAskType enum.
         * @name main.NormalAskType
         * @enum {number}
         * @property {number} UNKNOWN=0 UNKNOWN value
         * @property {number} PRIMARYADDITIONAL=1 PRIMARYADDITIONAL value
         * @property {number} SECONDARY=2 SECONDARY value
         */
        main.NormalAskType = (function() {
            var valuesById = {}, values = Object.create(valuesById);
            values[valuesById[0] = "UNKNOWN"] = 0;
            values[valuesById[1] = "PRIMARYADDITIONAL"] = 1;
            values[valuesById[2] = "SECONDARY"] = 2;
            return values;
        })();
    
        main.NormalAsk = (function() {
    
            /**
             * Properties of a NormalAsk.
             * @memberof main
             * @interface INormalAsk
             * @property {string|null} [id] NormalAsk id
             * @property {main.NormalAskType|null} [type] NormalAsk type
             * @property {string|null} [account_id] NormalAsk account_id
             * @property {string|null} [price_ujpy] NormalAsk price_ujpy
             * @property {string|null} [amount_uupx] NormalAsk amount_uupx
             * @property {boolean|null} [is_deleted] NormalAsk is_deleted
             * @property {boolean|null} [is_auto_order] NormalAsk is_auto_order
             */
    
            /**
             * Constructs a new NormalAsk.
             * @memberof main
             * @classdesc Represents a NormalAsk.
             * @implements INormalAsk
             * @constructor
             * @param {main.INormalAsk=} [properties] Properties to set
             */
            function NormalAsk(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }
    
            /**
             * NormalAsk id.
             * @member {string} id
             * @memberof main.NormalAsk
             * @instance
             */
            NormalAsk.prototype.id = "";
    
            /**
             * NormalAsk type.
             * @member {main.NormalAskType} type
             * @memberof main.NormalAsk
             * @instance
             */
            NormalAsk.prototype.type = 0;
    
            /**
             * NormalAsk account_id.
             * @member {string} account_id
             * @memberof main.NormalAsk
             * @instance
             */
            NormalAsk.prototype.account_id = "";
    
            /**
             * NormalAsk price_ujpy.
             * @member {string} price_ujpy
             * @memberof main.NormalAsk
             * @instance
             */
            NormalAsk.prototype.price_ujpy = "";
    
            /**
             * NormalAsk amount_uupx.
             * @member {string} amount_uupx
             * @memberof main.NormalAsk
             * @instance
             */
            NormalAsk.prototype.amount_uupx = "";
    
            /**
             * NormalAsk is_deleted.
             * @member {boolean} is_deleted
             * @memberof main.NormalAsk
             * @instance
             */
            NormalAsk.prototype.is_deleted = false;
    
            /**
             * NormalAsk is_auto_order.
             * @member {boolean} is_auto_order
             * @memberof main.NormalAsk
             * @instance
             */
            NormalAsk.prototype.is_auto_order = false;
    
            /**
             * Encodes the specified NormalAsk message. Does not implicitly {@link main.NormalAsk.verify|verify} messages.
             * @function encode
             * @memberof main.NormalAsk
             * @static
             * @param {main.INormalAsk} message NormalAsk message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            NormalAsk.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.id != null && Object.hasOwnProperty.call(message, "id"))
                    writer.uint32(/* id 1, wireType 2 =*/10).string(message.id);
                if (message.type != null && Object.hasOwnProperty.call(message, "type"))
                    writer.uint32(/* id 2, wireType 0 =*/16).int32(message.type);
                if (message.account_id != null && Object.hasOwnProperty.call(message, "account_id"))
                    writer.uint32(/* id 3, wireType 2 =*/26).string(message.account_id);
                if (message.price_ujpy != null && Object.hasOwnProperty.call(message, "price_ujpy"))
                    writer.uint32(/* id 4, wireType 2 =*/34).string(message.price_ujpy);
                if (message.amount_uupx != null && Object.hasOwnProperty.call(message, "amount_uupx"))
                    writer.uint32(/* id 5, wireType 2 =*/42).string(message.amount_uupx);
                if (message.is_deleted != null && Object.hasOwnProperty.call(message, "is_deleted"))
                    writer.uint32(/* id 6, wireType 0 =*/48).bool(message.is_deleted);
                if (message.is_auto_order != null && Object.hasOwnProperty.call(message, "is_auto_order"))
                    writer.uint32(/* id 7, wireType 0 =*/56).bool(message.is_auto_order);
                return writer;
            };
    
            /**
             * Encodes the specified NormalAsk message, length delimited. Does not implicitly {@link main.NormalAsk.verify|verify} messages.
             * @function encodeDelimited
             * @memberof main.NormalAsk
             * @static
             * @param {main.INormalAsk} message NormalAsk message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            NormalAsk.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };
    
            /**
             * Decodes a NormalAsk message from the specified reader or buffer.
             * @function decode
             * @memberof main.NormalAsk
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {main.NormalAsk} NormalAsk
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            NormalAsk.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.main.NormalAsk();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1:
                        message.id = reader.string();
                        break;
                    case 2:
                        message.type = reader.int32();
                        break;
                    case 3:
                        message.account_id = reader.string();
                        break;
                    case 4:
                        message.price_ujpy = reader.string();
                        break;
                    case 5:
                        message.amount_uupx = reader.string();
                        break;
                    case 6:
                        message.is_deleted = reader.bool();
                        break;
                    case 7:
                        message.is_auto_order = reader.bool();
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };
    
            /**
             * Decodes a NormalAsk message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof main.NormalAsk
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {main.NormalAsk} NormalAsk
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            NormalAsk.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };
    
            /**
             * Verifies a NormalAsk message.
             * @function verify
             * @memberof main.NormalAsk
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            NormalAsk.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.id != null && message.hasOwnProperty("id"))
                    if (!$util.isString(message.id))
                        return "id: string expected";
                if (message.type != null && message.hasOwnProperty("type"))
                    switch (message.type) {
                    default:
                        return "type: enum value expected";
                    case 0:
                    case 1:
                    case 2:
                        break;
                    }
                if (message.account_id != null && message.hasOwnProperty("account_id"))
                    if (!$util.isString(message.account_id))
                        return "account_id: string expected";
                if (message.price_ujpy != null && message.hasOwnProperty("price_ujpy"))
                    if (!$util.isString(message.price_ujpy))
                        return "price_ujpy: string expected";
                if (message.amount_uupx != null && message.hasOwnProperty("amount_uupx"))
                    if (!$util.isString(message.amount_uupx))
                        return "amount_uupx: string expected";
                if (message.is_deleted != null && message.hasOwnProperty("is_deleted"))
                    if (typeof message.is_deleted !== "boolean")
                        return "is_deleted: boolean expected";
                if (message.is_auto_order != null && message.hasOwnProperty("is_auto_order"))
                    if (typeof message.is_auto_order !== "boolean")
                        return "is_auto_order: boolean expected";
                return null;
            };
    
            /**
             * Creates a NormalAsk message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof main.NormalAsk
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {main.NormalAsk} NormalAsk
             */
            NormalAsk.fromObject = function fromObject(object) {
                if (object instanceof $root.main.NormalAsk)
                    return object;
                var message = new $root.main.NormalAsk();
                if (object.id != null)
                    message.id = String(object.id);
                switch (object.type) {
                case "UNKNOWN":
                case 0:
                    message.type = 0;
                    break;
                case "PRIMARYADDITIONAL":
                case 1:
                    message.type = 1;
                    break;
                case "SECONDARY":
                case 2:
                    message.type = 2;
                    break;
                }
                if (object.account_id != null)
                    message.account_id = String(object.account_id);
                if (object.price_ujpy != null)
                    message.price_ujpy = String(object.price_ujpy);
                if (object.amount_uupx != null)
                    message.amount_uupx = String(object.amount_uupx);
                if (object.is_deleted != null)
                    message.is_deleted = Boolean(object.is_deleted);
                if (object.is_auto_order != null)
                    message.is_auto_order = Boolean(object.is_auto_order);
                return message;
            };
    
            /**
             * Creates a plain object from a NormalAsk message. Also converts values to other types if specified.
             * @function toObject
             * @memberof main.NormalAsk
             * @static
             * @param {main.NormalAsk} message NormalAsk
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            NormalAsk.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (options.defaults) {
                    object.id = "";
                    object.type = options.enums === String ? "UNKNOWN" : 0;
                    object.account_id = "";
                    object.price_ujpy = "";
                    object.amount_uupx = "";
                    object.is_deleted = false;
                    object.is_auto_order = false;
                }
                if (message.id != null && message.hasOwnProperty("id"))
                    object.id = message.id;
                if (message.type != null && message.hasOwnProperty("type"))
                    object.type = options.enums === String ? $root.main.NormalAskType[message.type] : message.type;
                if (message.account_id != null && message.hasOwnProperty("account_id"))
                    object.account_id = message.account_id;
                if (message.price_ujpy != null && message.hasOwnProperty("price_ujpy"))
                    object.price_ujpy = message.price_ujpy;
                if (message.amount_uupx != null && message.hasOwnProperty("amount_uupx"))
                    object.amount_uupx = message.amount_uupx;
                if (message.is_deleted != null && message.hasOwnProperty("is_deleted"))
                    object.is_deleted = message.is_deleted;
                if (message.is_auto_order != null && message.hasOwnProperty("is_auto_order"))
                    object.is_auto_order = message.is_auto_order;
                return object;
            };
    
            /**
             * Converts this NormalAsk to JSON.
             * @function toJSON
             * @memberof main.NormalAsk
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            NormalAsk.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };
    
            return NormalAsk;
        })();
    
        main.NormalBidDelete = (function() {
    
            /**
             * Properties of a NormalBidDelete.
             * @memberof main
             * @interface INormalBidDelete
             * @property {string|null} [id] NormalBidDelete id
             * @property {string|null} [bid_id] NormalBidDelete bid_id
             */
    
            /**
             * Constructs a new NormalBidDelete.
             * @memberof main
             * @classdesc Represents a NormalBidDelete.
             * @implements INormalBidDelete
             * @constructor
             * @param {main.INormalBidDelete=} [properties] Properties to set
             */
            function NormalBidDelete(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }
    
            /**
             * NormalBidDelete id.
             * @member {string} id
             * @memberof main.NormalBidDelete
             * @instance
             */
            NormalBidDelete.prototype.id = "";
    
            /**
             * NormalBidDelete bid_id.
             * @member {string} bid_id
             * @memberof main.NormalBidDelete
             * @instance
             */
            NormalBidDelete.prototype.bid_id = "";
    
            /**
             * Encodes the specified NormalBidDelete message. Does not implicitly {@link main.NormalBidDelete.verify|verify} messages.
             * @function encode
             * @memberof main.NormalBidDelete
             * @static
             * @param {main.INormalBidDelete} message NormalBidDelete message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            NormalBidDelete.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.id != null && Object.hasOwnProperty.call(message, "id"))
                    writer.uint32(/* id 1, wireType 2 =*/10).string(message.id);
                if (message.bid_id != null && Object.hasOwnProperty.call(message, "bid_id"))
                    writer.uint32(/* id 2, wireType 2 =*/18).string(message.bid_id);
                return writer;
            };
    
            /**
             * Encodes the specified NormalBidDelete message, length delimited. Does not implicitly {@link main.NormalBidDelete.verify|verify} messages.
             * @function encodeDelimited
             * @memberof main.NormalBidDelete
             * @static
             * @param {main.INormalBidDelete} message NormalBidDelete message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            NormalBidDelete.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };
    
            /**
             * Decodes a NormalBidDelete message from the specified reader or buffer.
             * @function decode
             * @memberof main.NormalBidDelete
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {main.NormalBidDelete} NormalBidDelete
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            NormalBidDelete.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.main.NormalBidDelete();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1:
                        message.id = reader.string();
                        break;
                    case 2:
                        message.bid_id = reader.string();
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };
    
            /**
             * Decodes a NormalBidDelete message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof main.NormalBidDelete
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {main.NormalBidDelete} NormalBidDelete
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            NormalBidDelete.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };
    
            /**
             * Verifies a NormalBidDelete message.
             * @function verify
             * @memberof main.NormalBidDelete
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            NormalBidDelete.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.id != null && message.hasOwnProperty("id"))
                    if (!$util.isString(message.id))
                        return "id: string expected";
                if (message.bid_id != null && message.hasOwnProperty("bid_id"))
                    if (!$util.isString(message.bid_id))
                        return "bid_id: string expected";
                return null;
            };
    
            /**
             * Creates a NormalBidDelete message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof main.NormalBidDelete
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {main.NormalBidDelete} NormalBidDelete
             */
            NormalBidDelete.fromObject = function fromObject(object) {
                if (object instanceof $root.main.NormalBidDelete)
                    return object;
                var message = new $root.main.NormalBidDelete();
                if (object.id != null)
                    message.id = String(object.id);
                if (object.bid_id != null)
                    message.bid_id = String(object.bid_id);
                return message;
            };
    
            /**
             * Creates a plain object from a NormalBidDelete message. Also converts values to other types if specified.
             * @function toObject
             * @memberof main.NormalBidDelete
             * @static
             * @param {main.NormalBidDelete} message NormalBidDelete
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            NormalBidDelete.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (options.defaults) {
                    object.id = "";
                    object.bid_id = "";
                }
                if (message.id != null && message.hasOwnProperty("id"))
                    object.id = message.id;
                if (message.bid_id != null && message.hasOwnProperty("bid_id"))
                    object.bid_id = message.bid_id;
                return object;
            };
    
            /**
             * Converts this NormalBidDelete to JSON.
             * @function toJSON
             * @memberof main.NormalBidDelete
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            NormalBidDelete.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };
    
            return NormalBidDelete;
        })();
    
        main.NormalBid = (function() {
    
            /**
             * Properties of a NormalBid.
             * @memberof main
             * @interface INormalBid
             * @property {string|null} [id] NormalBid id
             * @property {string|null} [account_id] NormalBid account_id
             * @property {string|null} [price_ujpy] NormalBid price_ujpy
             * @property {string|null} [amount_uupx] NormalBid amount_uupx
             * @property {boolean|null} [is_deleted] NormalBid is_deleted
             * @property {boolean|null} [is_auto_order] NormalBid is_auto_order
             */
    
            /**
             * Constructs a new NormalBid.
             * @memberof main
             * @classdesc Represents a NormalBid.
             * @implements INormalBid
             * @constructor
             * @param {main.INormalBid=} [properties] Properties to set
             */
            function NormalBid(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }
    
            /**
             * NormalBid id.
             * @member {string} id
             * @memberof main.NormalBid
             * @instance
             */
            NormalBid.prototype.id = "";
    
            /**
             * NormalBid account_id.
             * @member {string} account_id
             * @memberof main.NormalBid
             * @instance
             */
            NormalBid.prototype.account_id = "";
    
            /**
             * NormalBid price_ujpy.
             * @member {string} price_ujpy
             * @memberof main.NormalBid
             * @instance
             */
            NormalBid.prototype.price_ujpy = "";
    
            /**
             * NormalBid amount_uupx.
             * @member {string} amount_uupx
             * @memberof main.NormalBid
             * @instance
             */
            NormalBid.prototype.amount_uupx = "";
    
            /**
             * NormalBid is_deleted.
             * @member {boolean} is_deleted
             * @memberof main.NormalBid
             * @instance
             */
            NormalBid.prototype.is_deleted = false;
    
            /**
             * NormalBid is_auto_order.
             * @member {boolean} is_auto_order
             * @memberof main.NormalBid
             * @instance
             */
            NormalBid.prototype.is_auto_order = false;
    
            /**
             * Encodes the specified NormalBid message. Does not implicitly {@link main.NormalBid.verify|verify} messages.
             * @function encode
             * @memberof main.NormalBid
             * @static
             * @param {main.INormalBid} message NormalBid message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            NormalBid.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.id != null && Object.hasOwnProperty.call(message, "id"))
                    writer.uint32(/* id 1, wireType 2 =*/10).string(message.id);
                if (message.account_id != null && Object.hasOwnProperty.call(message, "account_id"))
                    writer.uint32(/* id 2, wireType 2 =*/18).string(message.account_id);
                if (message.price_ujpy != null && Object.hasOwnProperty.call(message, "price_ujpy"))
                    writer.uint32(/* id 3, wireType 2 =*/26).string(message.price_ujpy);
                if (message.amount_uupx != null && Object.hasOwnProperty.call(message, "amount_uupx"))
                    writer.uint32(/* id 4, wireType 2 =*/34).string(message.amount_uupx);
                if (message.is_deleted != null && Object.hasOwnProperty.call(message, "is_deleted"))
                    writer.uint32(/* id 5, wireType 0 =*/40).bool(message.is_deleted);
                if (message.is_auto_order != null && Object.hasOwnProperty.call(message, "is_auto_order"))
                    writer.uint32(/* id 6, wireType 0 =*/48).bool(message.is_auto_order);
                return writer;
            };
    
            /**
             * Encodes the specified NormalBid message, length delimited. Does not implicitly {@link main.NormalBid.verify|verify} messages.
             * @function encodeDelimited
             * @memberof main.NormalBid
             * @static
             * @param {main.INormalBid} message NormalBid message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            NormalBid.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };
    
            /**
             * Decodes a NormalBid message from the specified reader or buffer.
             * @function decode
             * @memberof main.NormalBid
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {main.NormalBid} NormalBid
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            NormalBid.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.main.NormalBid();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1:
                        message.id = reader.string();
                        break;
                    case 2:
                        message.account_id = reader.string();
                        break;
                    case 3:
                        message.price_ujpy = reader.string();
                        break;
                    case 4:
                        message.amount_uupx = reader.string();
                        break;
                    case 5:
                        message.is_deleted = reader.bool();
                        break;
                    case 6:
                        message.is_auto_order = reader.bool();
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };
    
            /**
             * Decodes a NormalBid message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof main.NormalBid
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {main.NormalBid} NormalBid
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            NormalBid.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };
    
            /**
             * Verifies a NormalBid message.
             * @function verify
             * @memberof main.NormalBid
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            NormalBid.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.id != null && message.hasOwnProperty("id"))
                    if (!$util.isString(message.id))
                        return "id: string expected";
                if (message.account_id != null && message.hasOwnProperty("account_id"))
                    if (!$util.isString(message.account_id))
                        return "account_id: string expected";
                if (message.price_ujpy != null && message.hasOwnProperty("price_ujpy"))
                    if (!$util.isString(message.price_ujpy))
                        return "price_ujpy: string expected";
                if (message.amount_uupx != null && message.hasOwnProperty("amount_uupx"))
                    if (!$util.isString(message.amount_uupx))
                        return "amount_uupx: string expected";
                if (message.is_deleted != null && message.hasOwnProperty("is_deleted"))
                    if (typeof message.is_deleted !== "boolean")
                        return "is_deleted: boolean expected";
                if (message.is_auto_order != null && message.hasOwnProperty("is_auto_order"))
                    if (typeof message.is_auto_order !== "boolean")
                        return "is_auto_order: boolean expected";
                return null;
            };
    
            /**
             * Creates a NormalBid message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof main.NormalBid
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {main.NormalBid} NormalBid
             */
            NormalBid.fromObject = function fromObject(object) {
                if (object instanceof $root.main.NormalBid)
                    return object;
                var message = new $root.main.NormalBid();
                if (object.id != null)
                    message.id = String(object.id);
                if (object.account_id != null)
                    message.account_id = String(object.account_id);
                if (object.price_ujpy != null)
                    message.price_ujpy = String(object.price_ujpy);
                if (object.amount_uupx != null)
                    message.amount_uupx = String(object.amount_uupx);
                if (object.is_deleted != null)
                    message.is_deleted = Boolean(object.is_deleted);
                if (object.is_auto_order != null)
                    message.is_auto_order = Boolean(object.is_auto_order);
                return message;
            };
    
            /**
             * Creates a plain object from a NormalBid message. Also converts values to other types if specified.
             * @function toObject
             * @memberof main.NormalBid
             * @static
             * @param {main.NormalBid} message NormalBid
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            NormalBid.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (options.defaults) {
                    object.id = "";
                    object.account_id = "";
                    object.price_ujpy = "";
                    object.amount_uupx = "";
                    object.is_deleted = false;
                    object.is_auto_order = false;
                }
                if (message.id != null && message.hasOwnProperty("id"))
                    object.id = message.id;
                if (message.account_id != null && message.hasOwnProperty("account_id"))
                    object.account_id = message.account_id;
                if (message.price_ujpy != null && message.hasOwnProperty("price_ujpy"))
                    object.price_ujpy = message.price_ujpy;
                if (message.amount_uupx != null && message.hasOwnProperty("amount_uupx"))
                    object.amount_uupx = message.amount_uupx;
                if (message.is_deleted != null && message.hasOwnProperty("is_deleted"))
                    object.is_deleted = message.is_deleted;
                if (message.is_auto_order != null && message.hasOwnProperty("is_auto_order"))
                    object.is_auto_order = message.is_auto_order;
                return object;
            };
    
            /**
             * Converts this NormalBid to JSON.
             * @function toJSON
             * @memberof main.NormalBid
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            NormalBid.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };
    
            return NormalBid;
        })();
    
        main.NormalSettlement = (function() {
    
            /**
             * Properties of a NormalSettlement.
             * @memberof main
             * @interface INormalSettlement
             * @property {string|null} [id] NormalSettlement id
             * @property {string|null} [bid_id] NormalSettlement bid_id
             * @property {string|null} [ask_id] NormalSettlement ask_id
             * @property {string|null} [price_ujpy] NormalSettlement price_ujpy
             * @property {string|null} [amount_uupx] NormalSettlement amount_uupx
             */
    
            /**
             * Constructs a new NormalSettlement.
             * @memberof main
             * @classdesc Represents a NormalSettlement.
             * @implements INormalSettlement
             * @constructor
             * @param {main.INormalSettlement=} [properties] Properties to set
             */
            function NormalSettlement(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }
    
            /**
             * NormalSettlement id.
             * @member {string} id
             * @memberof main.NormalSettlement
             * @instance
             */
            NormalSettlement.prototype.id = "";
    
            /**
             * NormalSettlement bid_id.
             * @member {string} bid_id
             * @memberof main.NormalSettlement
             * @instance
             */
            NormalSettlement.prototype.bid_id = "";
    
            /**
             * NormalSettlement ask_id.
             * @member {string} ask_id
             * @memberof main.NormalSettlement
             * @instance
             */
            NormalSettlement.prototype.ask_id = "";
    
            /**
             * NormalSettlement price_ujpy.
             * @member {string} price_ujpy
             * @memberof main.NormalSettlement
             * @instance
             */
            NormalSettlement.prototype.price_ujpy = "";
    
            /**
             * NormalSettlement amount_uupx.
             * @member {string} amount_uupx
             * @memberof main.NormalSettlement
             * @instance
             */
            NormalSettlement.prototype.amount_uupx = "";
    
            /**
             * Encodes the specified NormalSettlement message. Does not implicitly {@link main.NormalSettlement.verify|verify} messages.
             * @function encode
             * @memberof main.NormalSettlement
             * @static
             * @param {main.INormalSettlement} message NormalSettlement message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            NormalSettlement.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.id != null && Object.hasOwnProperty.call(message, "id"))
                    writer.uint32(/* id 1, wireType 2 =*/10).string(message.id);
                if (message.bid_id != null && Object.hasOwnProperty.call(message, "bid_id"))
                    writer.uint32(/* id 2, wireType 2 =*/18).string(message.bid_id);
                if (message.ask_id != null && Object.hasOwnProperty.call(message, "ask_id"))
                    writer.uint32(/* id 3, wireType 2 =*/26).string(message.ask_id);
                if (message.price_ujpy != null && Object.hasOwnProperty.call(message, "price_ujpy"))
                    writer.uint32(/* id 4, wireType 2 =*/34).string(message.price_ujpy);
                if (message.amount_uupx != null && Object.hasOwnProperty.call(message, "amount_uupx"))
                    writer.uint32(/* id 5, wireType 2 =*/42).string(message.amount_uupx);
                return writer;
            };
    
            /**
             * Encodes the specified NormalSettlement message, length delimited. Does not implicitly {@link main.NormalSettlement.verify|verify} messages.
             * @function encodeDelimited
             * @memberof main.NormalSettlement
             * @static
             * @param {main.INormalSettlement} message NormalSettlement message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            NormalSettlement.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };
    
            /**
             * Decodes a NormalSettlement message from the specified reader or buffer.
             * @function decode
             * @memberof main.NormalSettlement
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {main.NormalSettlement} NormalSettlement
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            NormalSettlement.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.main.NormalSettlement();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1:
                        message.id = reader.string();
                        break;
                    case 2:
                        message.bid_id = reader.string();
                        break;
                    case 3:
                        message.ask_id = reader.string();
                        break;
                    case 4:
                        message.price_ujpy = reader.string();
                        break;
                    case 5:
                        message.amount_uupx = reader.string();
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };
    
            /**
             * Decodes a NormalSettlement message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof main.NormalSettlement
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {main.NormalSettlement} NormalSettlement
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            NormalSettlement.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };
    
            /**
             * Verifies a NormalSettlement message.
             * @function verify
             * @memberof main.NormalSettlement
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            NormalSettlement.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.id != null && message.hasOwnProperty("id"))
                    if (!$util.isString(message.id))
                        return "id: string expected";
                if (message.bid_id != null && message.hasOwnProperty("bid_id"))
                    if (!$util.isString(message.bid_id))
                        return "bid_id: string expected";
                if (message.ask_id != null && message.hasOwnProperty("ask_id"))
                    if (!$util.isString(message.ask_id))
                        return "ask_id: string expected";
                if (message.price_ujpy != null && message.hasOwnProperty("price_ujpy"))
                    if (!$util.isString(message.price_ujpy))
                        return "price_ujpy: string expected";
                if (message.amount_uupx != null && message.hasOwnProperty("amount_uupx"))
                    if (!$util.isString(message.amount_uupx))
                        return "amount_uupx: string expected";
                return null;
            };
    
            /**
             * Creates a NormalSettlement message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof main.NormalSettlement
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {main.NormalSettlement} NormalSettlement
             */
            NormalSettlement.fromObject = function fromObject(object) {
                if (object instanceof $root.main.NormalSettlement)
                    return object;
                var message = new $root.main.NormalSettlement();
                if (object.id != null)
                    message.id = String(object.id);
                if (object.bid_id != null)
                    message.bid_id = String(object.bid_id);
                if (object.ask_id != null)
                    message.ask_id = String(object.ask_id);
                if (object.price_ujpy != null)
                    message.price_ujpy = String(object.price_ujpy);
                if (object.amount_uupx != null)
                    message.amount_uupx = String(object.amount_uupx);
                return message;
            };
    
            /**
             * Creates a plain object from a NormalSettlement message. Also converts values to other types if specified.
             * @function toObject
             * @memberof main.NormalSettlement
             * @static
             * @param {main.NormalSettlement} message NormalSettlement
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            NormalSettlement.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (options.defaults) {
                    object.id = "";
                    object.bid_id = "";
                    object.ask_id = "";
                    object.price_ujpy = "";
                    object.amount_uupx = "";
                }
                if (message.id != null && message.hasOwnProperty("id"))
                    object.id = message.id;
                if (message.bid_id != null && message.hasOwnProperty("bid_id"))
                    object.bid_id = message.bid_id;
                if (message.ask_id != null && message.hasOwnProperty("ask_id"))
                    object.ask_id = message.ask_id;
                if (message.price_ujpy != null && message.hasOwnProperty("price_ujpy"))
                    object.price_ujpy = message.price_ujpy;
                if (message.amount_uupx != null && message.hasOwnProperty("amount_uupx"))
                    object.amount_uupx = message.amount_uupx;
                return object;
            };
    
            /**
             * Converts this NormalSettlement to JSON.
             * @function toJSON
             * @memberof main.NormalSettlement
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            NormalSettlement.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };
    
            return NormalSettlement;
        })();
    
        main.PrimaryAskSetting = (function() {
    
            /**
             * Properties of a PrimaryAskSetting.
             * @memberof main
             * @interface IPrimaryAskSetting
             * @property {string|null} [id] PrimaryAskSetting id
             * @property {string|null} [price_ujpy] PrimaryAskSetting price_ujpy
             * @property {string|null} [ratio_percentage] PrimaryAskSetting ratio_percentage
             */
    
            /**
             * Constructs a new PrimaryAskSetting.
             * @memberof main
             * @classdesc Represents a PrimaryAskSetting.
             * @implements IPrimaryAskSetting
             * @constructor
             * @param {main.IPrimaryAskSetting=} [properties] Properties to set
             */
            function PrimaryAskSetting(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }
    
            /**
             * PrimaryAskSetting id.
             * @member {string} id
             * @memberof main.PrimaryAskSetting
             * @instance
             */
            PrimaryAskSetting.prototype.id = "";
    
            /**
             * PrimaryAskSetting price_ujpy.
             * @member {string} price_ujpy
             * @memberof main.PrimaryAskSetting
             * @instance
             */
            PrimaryAskSetting.prototype.price_ujpy = "";
    
            /**
             * PrimaryAskSetting ratio_percentage.
             * @member {string} ratio_percentage
             * @memberof main.PrimaryAskSetting
             * @instance
             */
            PrimaryAskSetting.prototype.ratio_percentage = "";
    
            /**
             * Encodes the specified PrimaryAskSetting message. Does not implicitly {@link main.PrimaryAskSetting.verify|verify} messages.
             * @function encode
             * @memberof main.PrimaryAskSetting
             * @static
             * @param {main.IPrimaryAskSetting} message PrimaryAskSetting message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            PrimaryAskSetting.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.id != null && Object.hasOwnProperty.call(message, "id"))
                    writer.uint32(/* id 1, wireType 2 =*/10).string(message.id);
                if (message.price_ujpy != null && Object.hasOwnProperty.call(message, "price_ujpy"))
                    writer.uint32(/* id 2, wireType 2 =*/18).string(message.price_ujpy);
                if (message.ratio_percentage != null && Object.hasOwnProperty.call(message, "ratio_percentage"))
                    writer.uint32(/* id 3, wireType 2 =*/26).string(message.ratio_percentage);
                return writer;
            };
    
            /**
             * Encodes the specified PrimaryAskSetting message, length delimited. Does not implicitly {@link main.PrimaryAskSetting.verify|verify} messages.
             * @function encodeDelimited
             * @memberof main.PrimaryAskSetting
             * @static
             * @param {main.IPrimaryAskSetting} message PrimaryAskSetting message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            PrimaryAskSetting.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };
    
            /**
             * Decodes a PrimaryAskSetting message from the specified reader or buffer.
             * @function decode
             * @memberof main.PrimaryAskSetting
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {main.PrimaryAskSetting} PrimaryAskSetting
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            PrimaryAskSetting.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.main.PrimaryAskSetting();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1:
                        message.id = reader.string();
                        break;
                    case 2:
                        message.price_ujpy = reader.string();
                        break;
                    case 3:
                        message.ratio_percentage = reader.string();
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };
    
            /**
             * Decodes a PrimaryAskSetting message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof main.PrimaryAskSetting
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {main.PrimaryAskSetting} PrimaryAskSetting
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            PrimaryAskSetting.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };
    
            /**
             * Verifies a PrimaryAskSetting message.
             * @function verify
             * @memberof main.PrimaryAskSetting
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            PrimaryAskSetting.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.id != null && message.hasOwnProperty("id"))
                    if (!$util.isString(message.id))
                        return "id: string expected";
                if (message.price_ujpy != null && message.hasOwnProperty("price_ujpy"))
                    if (!$util.isString(message.price_ujpy))
                        return "price_ujpy: string expected";
                if (message.ratio_percentage != null && message.hasOwnProperty("ratio_percentage"))
                    if (!$util.isString(message.ratio_percentage))
                        return "ratio_percentage: string expected";
                return null;
            };
    
            /**
             * Creates a PrimaryAskSetting message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof main.PrimaryAskSetting
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {main.PrimaryAskSetting} PrimaryAskSetting
             */
            PrimaryAskSetting.fromObject = function fromObject(object) {
                if (object instanceof $root.main.PrimaryAskSetting)
                    return object;
                var message = new $root.main.PrimaryAskSetting();
                if (object.id != null)
                    message.id = String(object.id);
                if (object.price_ujpy != null)
                    message.price_ujpy = String(object.price_ujpy);
                if (object.ratio_percentage != null)
                    message.ratio_percentage = String(object.ratio_percentage);
                return message;
            };
    
            /**
             * Creates a plain object from a PrimaryAskSetting message. Also converts values to other types if specified.
             * @function toObject
             * @memberof main.PrimaryAskSetting
             * @static
             * @param {main.PrimaryAskSetting} message PrimaryAskSetting
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            PrimaryAskSetting.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (options.defaults) {
                    object.id = "";
                    object.price_ujpy = "";
                    object.ratio_percentage = "";
                }
                if (message.id != null && message.hasOwnProperty("id"))
                    object.id = message.id;
                if (message.price_ujpy != null && message.hasOwnProperty("price_ujpy"))
                    object.price_ujpy = message.price_ujpy;
                if (message.ratio_percentage != null && message.hasOwnProperty("ratio_percentage"))
                    object.ratio_percentage = message.ratio_percentage;
                return object;
            };
    
            /**
             * Converts this PrimaryAskSetting to JSON.
             * @function toJSON
             * @memberof main.PrimaryAskSetting
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            PrimaryAskSetting.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };
    
            return PrimaryAskSetting;
        })();
    
        main.PrimaryAsk = (function() {
    
            /**
             * Properties of a PrimaryAsk.
             * @memberof main
             * @interface IPrimaryAsk
             * @property {string|null} [id] PrimaryAsk id
             * @property {string|null} [account_id] PrimaryAsk account_id
             * @property {string|null} [price_ujpy] PrimaryAsk price_ujpy
             * @property {string|null} [amount_uupx] PrimaryAsk amount_uupx
             */
    
            /**
             * Constructs a new PrimaryAsk.
             * @memberof main
             * @classdesc Represents a PrimaryAsk.
             * @implements IPrimaryAsk
             * @constructor
             * @param {main.IPrimaryAsk=} [properties] Properties to set
             */
            function PrimaryAsk(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }
    
            /**
             * PrimaryAsk id.
             * @member {string} id
             * @memberof main.PrimaryAsk
             * @instance
             */
            PrimaryAsk.prototype.id = "";
    
            /**
             * PrimaryAsk account_id.
             * @member {string} account_id
             * @memberof main.PrimaryAsk
             * @instance
             */
            PrimaryAsk.prototype.account_id = "";
    
            /**
             * PrimaryAsk price_ujpy.
             * @member {string} price_ujpy
             * @memberof main.PrimaryAsk
             * @instance
             */
            PrimaryAsk.prototype.price_ujpy = "";
    
            /**
             * PrimaryAsk amount_uupx.
             * @member {string} amount_uupx
             * @memberof main.PrimaryAsk
             * @instance
             */
            PrimaryAsk.prototype.amount_uupx = "";
    
            /**
             * Encodes the specified PrimaryAsk message. Does not implicitly {@link main.PrimaryAsk.verify|verify} messages.
             * @function encode
             * @memberof main.PrimaryAsk
             * @static
             * @param {main.IPrimaryAsk} message PrimaryAsk message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            PrimaryAsk.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.id != null && Object.hasOwnProperty.call(message, "id"))
                    writer.uint32(/* id 1, wireType 2 =*/10).string(message.id);
                if (message.account_id != null && Object.hasOwnProperty.call(message, "account_id"))
                    writer.uint32(/* id 2, wireType 2 =*/18).string(message.account_id);
                if (message.price_ujpy != null && Object.hasOwnProperty.call(message, "price_ujpy"))
                    writer.uint32(/* id 3, wireType 2 =*/26).string(message.price_ujpy);
                if (message.amount_uupx != null && Object.hasOwnProperty.call(message, "amount_uupx"))
                    writer.uint32(/* id 4, wireType 2 =*/34).string(message.amount_uupx);
                return writer;
            };
    
            /**
             * Encodes the specified PrimaryAsk message, length delimited. Does not implicitly {@link main.PrimaryAsk.verify|verify} messages.
             * @function encodeDelimited
             * @memberof main.PrimaryAsk
             * @static
             * @param {main.IPrimaryAsk} message PrimaryAsk message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            PrimaryAsk.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };
    
            /**
             * Decodes a PrimaryAsk message from the specified reader or buffer.
             * @function decode
             * @memberof main.PrimaryAsk
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {main.PrimaryAsk} PrimaryAsk
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            PrimaryAsk.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.main.PrimaryAsk();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1:
                        message.id = reader.string();
                        break;
                    case 2:
                        message.account_id = reader.string();
                        break;
                    case 3:
                        message.price_ujpy = reader.string();
                        break;
                    case 4:
                        message.amount_uupx = reader.string();
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };
    
            /**
             * Decodes a PrimaryAsk message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof main.PrimaryAsk
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {main.PrimaryAsk} PrimaryAsk
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            PrimaryAsk.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };
    
            /**
             * Verifies a PrimaryAsk message.
             * @function verify
             * @memberof main.PrimaryAsk
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            PrimaryAsk.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.id != null && message.hasOwnProperty("id"))
                    if (!$util.isString(message.id))
                        return "id: string expected";
                if (message.account_id != null && message.hasOwnProperty("account_id"))
                    if (!$util.isString(message.account_id))
                        return "account_id: string expected";
                if (message.price_ujpy != null && message.hasOwnProperty("price_ujpy"))
                    if (!$util.isString(message.price_ujpy))
                        return "price_ujpy: string expected";
                if (message.amount_uupx != null && message.hasOwnProperty("amount_uupx"))
                    if (!$util.isString(message.amount_uupx))
                        return "amount_uupx: string expected";
                return null;
            };
    
            /**
             * Creates a PrimaryAsk message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof main.PrimaryAsk
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {main.PrimaryAsk} PrimaryAsk
             */
            PrimaryAsk.fromObject = function fromObject(object) {
                if (object instanceof $root.main.PrimaryAsk)
                    return object;
                var message = new $root.main.PrimaryAsk();
                if (object.id != null)
                    message.id = String(object.id);
                if (object.account_id != null)
                    message.account_id = String(object.account_id);
                if (object.price_ujpy != null)
                    message.price_ujpy = String(object.price_ujpy);
                if (object.amount_uupx != null)
                    message.amount_uupx = String(object.amount_uupx);
                return message;
            };
    
            /**
             * Creates a plain object from a PrimaryAsk message. Also converts values to other types if specified.
             * @function toObject
             * @memberof main.PrimaryAsk
             * @static
             * @param {main.PrimaryAsk} message PrimaryAsk
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            PrimaryAsk.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (options.defaults) {
                    object.id = "";
                    object.account_id = "";
                    object.price_ujpy = "";
                    object.amount_uupx = "";
                }
                if (message.id != null && message.hasOwnProperty("id"))
                    object.id = message.id;
                if (message.account_id != null && message.hasOwnProperty("account_id"))
                    object.account_id = message.account_id;
                if (message.price_ujpy != null && message.hasOwnProperty("price_ujpy"))
                    object.price_ujpy = message.price_ujpy;
                if (message.amount_uupx != null && message.hasOwnProperty("amount_uupx"))
                    object.amount_uupx = message.amount_uupx;
                return object;
            };
    
            /**
             * Converts this PrimaryAsk to JSON.
             * @function toJSON
             * @memberof main.PrimaryAsk
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            PrimaryAsk.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };
    
            return PrimaryAsk;
        })();
    
        main.PrimaryBid = (function() {
    
            /**
             * Properties of a PrimaryBid.
             * @memberof main
             * @interface IPrimaryBid
             * @property {string|null} [id] PrimaryBid id
             * @property {string|null} [account_id] PrimaryBid account_id
             * @property {string|null} [price_ujpy] PrimaryBid price_ujpy
             * @property {string|null} [amount_uupx] PrimaryBid amount_uupx
             */
    
            /**
             * Constructs a new PrimaryBid.
             * @memberof main
             * @classdesc Represents a PrimaryBid.
             * @implements IPrimaryBid
             * @constructor
             * @param {main.IPrimaryBid=} [properties] Properties to set
             */
            function PrimaryBid(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }
    
            /**
             * PrimaryBid id.
             * @member {string} id
             * @memberof main.PrimaryBid
             * @instance
             */
            PrimaryBid.prototype.id = "";
    
            /**
             * PrimaryBid account_id.
             * @member {string} account_id
             * @memberof main.PrimaryBid
             * @instance
             */
            PrimaryBid.prototype.account_id = "";
    
            /**
             * PrimaryBid price_ujpy.
             * @member {string} price_ujpy
             * @memberof main.PrimaryBid
             * @instance
             */
            PrimaryBid.prototype.price_ujpy = "";
    
            /**
             * PrimaryBid amount_uupx.
             * @member {string} amount_uupx
             * @memberof main.PrimaryBid
             * @instance
             */
            PrimaryBid.prototype.amount_uupx = "";
    
            /**
             * Encodes the specified PrimaryBid message. Does not implicitly {@link main.PrimaryBid.verify|verify} messages.
             * @function encode
             * @memberof main.PrimaryBid
             * @static
             * @param {main.IPrimaryBid} message PrimaryBid message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            PrimaryBid.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.id != null && Object.hasOwnProperty.call(message, "id"))
                    writer.uint32(/* id 1, wireType 2 =*/10).string(message.id);
                if (message.account_id != null && Object.hasOwnProperty.call(message, "account_id"))
                    writer.uint32(/* id 2, wireType 2 =*/18).string(message.account_id);
                if (message.price_ujpy != null && Object.hasOwnProperty.call(message, "price_ujpy"))
                    writer.uint32(/* id 3, wireType 2 =*/26).string(message.price_ujpy);
                if (message.amount_uupx != null && Object.hasOwnProperty.call(message, "amount_uupx"))
                    writer.uint32(/* id 4, wireType 2 =*/34).string(message.amount_uupx);
                return writer;
            };
    
            /**
             * Encodes the specified PrimaryBid message, length delimited. Does not implicitly {@link main.PrimaryBid.verify|verify} messages.
             * @function encodeDelimited
             * @memberof main.PrimaryBid
             * @static
             * @param {main.IPrimaryBid} message PrimaryBid message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            PrimaryBid.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };
    
            /**
             * Decodes a PrimaryBid message from the specified reader or buffer.
             * @function decode
             * @memberof main.PrimaryBid
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {main.PrimaryBid} PrimaryBid
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            PrimaryBid.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.main.PrimaryBid();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1:
                        message.id = reader.string();
                        break;
                    case 2:
                        message.account_id = reader.string();
                        break;
                    case 3:
                        message.price_ujpy = reader.string();
                        break;
                    case 4:
                        message.amount_uupx = reader.string();
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };
    
            /**
             * Decodes a PrimaryBid message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof main.PrimaryBid
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {main.PrimaryBid} PrimaryBid
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            PrimaryBid.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };
    
            /**
             * Verifies a PrimaryBid message.
             * @function verify
             * @memberof main.PrimaryBid
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            PrimaryBid.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.id != null && message.hasOwnProperty("id"))
                    if (!$util.isString(message.id))
                        return "id: string expected";
                if (message.account_id != null && message.hasOwnProperty("account_id"))
                    if (!$util.isString(message.account_id))
                        return "account_id: string expected";
                if (message.price_ujpy != null && message.hasOwnProperty("price_ujpy"))
                    if (!$util.isString(message.price_ujpy))
                        return "price_ujpy: string expected";
                if (message.amount_uupx != null && message.hasOwnProperty("amount_uupx"))
                    if (!$util.isString(message.amount_uupx))
                        return "amount_uupx: string expected";
                return null;
            };
    
            /**
             * Creates a PrimaryBid message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof main.PrimaryBid
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {main.PrimaryBid} PrimaryBid
             */
            PrimaryBid.fromObject = function fromObject(object) {
                if (object instanceof $root.main.PrimaryBid)
                    return object;
                var message = new $root.main.PrimaryBid();
                if (object.id != null)
                    message.id = String(object.id);
                if (object.account_id != null)
                    message.account_id = String(object.account_id);
                if (object.price_ujpy != null)
                    message.price_ujpy = String(object.price_ujpy);
                if (object.amount_uupx != null)
                    message.amount_uupx = String(object.amount_uupx);
                return message;
            };
    
            /**
             * Creates a plain object from a PrimaryBid message. Also converts values to other types if specified.
             * @function toObject
             * @memberof main.PrimaryBid
             * @static
             * @param {main.PrimaryBid} message PrimaryBid
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            PrimaryBid.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (options.defaults) {
                    object.id = "";
                    object.account_id = "";
                    object.price_ujpy = "";
                    object.amount_uupx = "";
                }
                if (message.id != null && message.hasOwnProperty("id"))
                    object.id = message.id;
                if (message.account_id != null && message.hasOwnProperty("account_id"))
                    object.account_id = message.account_id;
                if (message.price_ujpy != null && message.hasOwnProperty("price_ujpy"))
                    object.price_ujpy = message.price_ujpy;
                if (message.amount_uupx != null && message.hasOwnProperty("amount_uupx"))
                    object.amount_uupx = message.amount_uupx;
                return object;
            };
    
            /**
             * Converts this PrimaryBid to JSON.
             * @function toJSON
             * @memberof main.PrimaryBid
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            PrimaryBid.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };
    
            return PrimaryBid;
        })();
    
        main.RenewableAskDelete = (function() {
    
            /**
             * Properties of a RenewableAskDelete.
             * @memberof main
             * @interface IRenewableAskDelete
             * @property {string|null} [id] RenewableAskDelete id
             * @property {string|null} [ask_id] RenewableAskDelete ask_id
             */
    
            /**
             * Constructs a new RenewableAskDelete.
             * @memberof main
             * @classdesc Represents a RenewableAskDelete.
             * @implements IRenewableAskDelete
             * @constructor
             * @param {main.IRenewableAskDelete=} [properties] Properties to set
             */
            function RenewableAskDelete(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }
    
            /**
             * RenewableAskDelete id.
             * @member {string} id
             * @memberof main.RenewableAskDelete
             * @instance
             */
            RenewableAskDelete.prototype.id = "";
    
            /**
             * RenewableAskDelete ask_id.
             * @member {string} ask_id
             * @memberof main.RenewableAskDelete
             * @instance
             */
            RenewableAskDelete.prototype.ask_id = "";
    
            /**
             * Encodes the specified RenewableAskDelete message. Does not implicitly {@link main.RenewableAskDelete.verify|verify} messages.
             * @function encode
             * @memberof main.RenewableAskDelete
             * @static
             * @param {main.IRenewableAskDelete} message RenewableAskDelete message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            RenewableAskDelete.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.id != null && Object.hasOwnProperty.call(message, "id"))
                    writer.uint32(/* id 1, wireType 2 =*/10).string(message.id);
                if (message.ask_id != null && Object.hasOwnProperty.call(message, "ask_id"))
                    writer.uint32(/* id 2, wireType 2 =*/18).string(message.ask_id);
                return writer;
            };
    
            /**
             * Encodes the specified RenewableAskDelete message, length delimited. Does not implicitly {@link main.RenewableAskDelete.verify|verify} messages.
             * @function encodeDelimited
             * @memberof main.RenewableAskDelete
             * @static
             * @param {main.IRenewableAskDelete} message RenewableAskDelete message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            RenewableAskDelete.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };
    
            /**
             * Decodes a RenewableAskDelete message from the specified reader or buffer.
             * @function decode
             * @memberof main.RenewableAskDelete
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {main.RenewableAskDelete} RenewableAskDelete
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            RenewableAskDelete.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.main.RenewableAskDelete();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1:
                        message.id = reader.string();
                        break;
                    case 2:
                        message.ask_id = reader.string();
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };
    
            /**
             * Decodes a RenewableAskDelete message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof main.RenewableAskDelete
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {main.RenewableAskDelete} RenewableAskDelete
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            RenewableAskDelete.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };
    
            /**
             * Verifies a RenewableAskDelete message.
             * @function verify
             * @memberof main.RenewableAskDelete
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            RenewableAskDelete.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.id != null && message.hasOwnProperty("id"))
                    if (!$util.isString(message.id))
                        return "id: string expected";
                if (message.ask_id != null && message.hasOwnProperty("ask_id"))
                    if (!$util.isString(message.ask_id))
                        return "ask_id: string expected";
                return null;
            };
    
            /**
             * Creates a RenewableAskDelete message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof main.RenewableAskDelete
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {main.RenewableAskDelete} RenewableAskDelete
             */
            RenewableAskDelete.fromObject = function fromObject(object) {
                if (object instanceof $root.main.RenewableAskDelete)
                    return object;
                var message = new $root.main.RenewableAskDelete();
                if (object.id != null)
                    message.id = String(object.id);
                if (object.ask_id != null)
                    message.ask_id = String(object.ask_id);
                return message;
            };
    
            /**
             * Creates a plain object from a RenewableAskDelete message. Also converts values to other types if specified.
             * @function toObject
             * @memberof main.RenewableAskDelete
             * @static
             * @param {main.RenewableAskDelete} message RenewableAskDelete
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            RenewableAskDelete.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (options.defaults) {
                    object.id = "";
                    object.ask_id = "";
                }
                if (message.id != null && message.hasOwnProperty("id"))
                    object.id = message.id;
                if (message.ask_id != null && message.hasOwnProperty("ask_id"))
                    object.ask_id = message.ask_id;
                return object;
            };
    
            /**
             * Converts this RenewableAskDelete to JSON.
             * @function toJSON
             * @memberof main.RenewableAskDelete
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            RenewableAskDelete.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };
    
            return RenewableAskDelete;
        })();
    
        /**
         * RenewableAskHistoryType enum.
         * @name main.RenewableAskHistoryType
         * @enum {number}
         * @property {number} UNKNOWN=0 UNKNOWN value
         * @property {number} PRIMARY=1 PRIMARY value
         * @property {number} SECONDARY=2 SECONDARY value
         */
        main.RenewableAskHistoryType = (function() {
            var valuesById = {}, values = Object.create(valuesById);
            values[valuesById[0] = "UNKNOWN"] = 0;
            values[valuesById[1] = "PRIMARY"] = 1;
            values[valuesById[2] = "SECONDARY"] = 2;
            return values;
        })();
    
        main.RenewableAskHistory = (function() {
    
            /**
             * Properties of a RenewableAskHistory.
             * @memberof main
             * @interface IRenewableAskHistory
             * @property {string|null} [id] RenewableAskHistory id
             * @property {main.RenewableAskHistoryType|null} [type] RenewableAskHistory type
             * @property {string|null} [account_id] RenewableAskHistory account_id
             * @property {string|null} [price_ujpy] RenewableAskHistory price_ujpy
             * @property {string|null} [amount_uspx] RenewableAskHistory amount_uspx
             * @property {boolean|null} [is_accepted] RenewableAskHistory is_accepted
             * @property {string|null} [contract_price_ujpy] RenewableAskHistory contract_price_ujpy
             * @property {boolean|null} [is_auto_order] RenewableAskHistory is_auto_order
             */
    
            /**
             * Constructs a new RenewableAskHistory.
             * @memberof main
             * @classdesc Represents a RenewableAskHistory.
             * @implements IRenewableAskHistory
             * @constructor
             * @param {main.IRenewableAskHistory=} [properties] Properties to set
             */
            function RenewableAskHistory(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }
    
            /**
             * RenewableAskHistory id.
             * @member {string} id
             * @memberof main.RenewableAskHistory
             * @instance
             */
            RenewableAskHistory.prototype.id = "";
    
            /**
             * RenewableAskHistory type.
             * @member {main.RenewableAskHistoryType} type
             * @memberof main.RenewableAskHistory
             * @instance
             */
            RenewableAskHistory.prototype.type = 0;
    
            /**
             * RenewableAskHistory account_id.
             * @member {string} account_id
             * @memberof main.RenewableAskHistory
             * @instance
             */
            RenewableAskHistory.prototype.account_id = "";
    
            /**
             * RenewableAskHistory price_ujpy.
             * @member {string} price_ujpy
             * @memberof main.RenewableAskHistory
             * @instance
             */
            RenewableAskHistory.prototype.price_ujpy = "";
    
            /**
             * RenewableAskHistory amount_uspx.
             * @member {string} amount_uspx
             * @memberof main.RenewableAskHistory
             * @instance
             */
            RenewableAskHistory.prototype.amount_uspx = "";
    
            /**
             * RenewableAskHistory is_accepted.
             * @member {boolean} is_accepted
             * @memberof main.RenewableAskHistory
             * @instance
             */
            RenewableAskHistory.prototype.is_accepted = false;
    
            /**
             * RenewableAskHistory contract_price_ujpy.
             * @member {string} contract_price_ujpy
             * @memberof main.RenewableAskHistory
             * @instance
             */
            RenewableAskHistory.prototype.contract_price_ujpy = "";
    
            /**
             * RenewableAskHistory is_auto_order.
             * @member {boolean} is_auto_order
             * @memberof main.RenewableAskHistory
             * @instance
             */
            RenewableAskHistory.prototype.is_auto_order = false;
    
            /**
             * Encodes the specified RenewableAskHistory message. Does not implicitly {@link main.RenewableAskHistory.verify|verify} messages.
             * @function encode
             * @memberof main.RenewableAskHistory
             * @static
             * @param {main.IRenewableAskHistory} message RenewableAskHistory message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            RenewableAskHistory.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.id != null && Object.hasOwnProperty.call(message, "id"))
                    writer.uint32(/* id 1, wireType 2 =*/10).string(message.id);
                if (message.type != null && Object.hasOwnProperty.call(message, "type"))
                    writer.uint32(/* id 2, wireType 0 =*/16).int32(message.type);
                if (message.account_id != null && Object.hasOwnProperty.call(message, "account_id"))
                    writer.uint32(/* id 3, wireType 2 =*/26).string(message.account_id);
                if (message.price_ujpy != null && Object.hasOwnProperty.call(message, "price_ujpy"))
                    writer.uint32(/* id 4, wireType 2 =*/34).string(message.price_ujpy);
                if (message.amount_uspx != null && Object.hasOwnProperty.call(message, "amount_uspx"))
                    writer.uint32(/* id 5, wireType 2 =*/42).string(message.amount_uspx);
                if (message.is_accepted != null && Object.hasOwnProperty.call(message, "is_accepted"))
                    writer.uint32(/* id 6, wireType 0 =*/48).bool(message.is_accepted);
                if (message.contract_price_ujpy != null && Object.hasOwnProperty.call(message, "contract_price_ujpy"))
                    writer.uint32(/* id 7, wireType 2 =*/58).string(message.contract_price_ujpy);
                if (message.is_auto_order != null && Object.hasOwnProperty.call(message, "is_auto_order"))
                    writer.uint32(/* id 8, wireType 0 =*/64).bool(message.is_auto_order);
                return writer;
            };
    
            /**
             * Encodes the specified RenewableAskHistory message, length delimited. Does not implicitly {@link main.RenewableAskHistory.verify|verify} messages.
             * @function encodeDelimited
             * @memberof main.RenewableAskHistory
             * @static
             * @param {main.IRenewableAskHistory} message RenewableAskHistory message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            RenewableAskHistory.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };
    
            /**
             * Decodes a RenewableAskHistory message from the specified reader or buffer.
             * @function decode
             * @memberof main.RenewableAskHistory
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {main.RenewableAskHistory} RenewableAskHistory
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            RenewableAskHistory.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.main.RenewableAskHistory();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1:
                        message.id = reader.string();
                        break;
                    case 2:
                        message.type = reader.int32();
                        break;
                    case 3:
                        message.account_id = reader.string();
                        break;
                    case 4:
                        message.price_ujpy = reader.string();
                        break;
                    case 5:
                        message.amount_uspx = reader.string();
                        break;
                    case 6:
                        message.is_accepted = reader.bool();
                        break;
                    case 7:
                        message.contract_price_ujpy = reader.string();
                        break;
                    case 8:
                        message.is_auto_order = reader.bool();
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };
    
            /**
             * Decodes a RenewableAskHistory message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof main.RenewableAskHistory
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {main.RenewableAskHistory} RenewableAskHistory
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            RenewableAskHistory.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };
    
            /**
             * Verifies a RenewableAskHistory message.
             * @function verify
             * @memberof main.RenewableAskHistory
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            RenewableAskHistory.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.id != null && message.hasOwnProperty("id"))
                    if (!$util.isString(message.id))
                        return "id: string expected";
                if (message.type != null && message.hasOwnProperty("type"))
                    switch (message.type) {
                    default:
                        return "type: enum value expected";
                    case 0:
                    case 1:
                    case 2:
                        break;
                    }
                if (message.account_id != null && message.hasOwnProperty("account_id"))
                    if (!$util.isString(message.account_id))
                        return "account_id: string expected";
                if (message.price_ujpy != null && message.hasOwnProperty("price_ujpy"))
                    if (!$util.isString(message.price_ujpy))
                        return "price_ujpy: string expected";
                if (message.amount_uspx != null && message.hasOwnProperty("amount_uspx"))
                    if (!$util.isString(message.amount_uspx))
                        return "amount_uspx: string expected";
                if (message.is_accepted != null && message.hasOwnProperty("is_accepted"))
                    if (typeof message.is_accepted !== "boolean")
                        return "is_accepted: boolean expected";
                if (message.contract_price_ujpy != null && message.hasOwnProperty("contract_price_ujpy"))
                    if (!$util.isString(message.contract_price_ujpy))
                        return "contract_price_ujpy: string expected";
                if (message.is_auto_order != null && message.hasOwnProperty("is_auto_order"))
                    if (typeof message.is_auto_order !== "boolean")
                        return "is_auto_order: boolean expected";
                return null;
            };
    
            /**
             * Creates a RenewableAskHistory message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof main.RenewableAskHistory
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {main.RenewableAskHistory} RenewableAskHistory
             */
            RenewableAskHistory.fromObject = function fromObject(object) {
                if (object instanceof $root.main.RenewableAskHistory)
                    return object;
                var message = new $root.main.RenewableAskHistory();
                if (object.id != null)
                    message.id = String(object.id);
                switch (object.type) {
                case "UNKNOWN":
                case 0:
                    message.type = 0;
                    break;
                case "PRIMARY":
                case 1:
                    message.type = 1;
                    break;
                case "SECONDARY":
                case 2:
                    message.type = 2;
                    break;
                }
                if (object.account_id != null)
                    message.account_id = String(object.account_id);
                if (object.price_ujpy != null)
                    message.price_ujpy = String(object.price_ujpy);
                if (object.amount_uspx != null)
                    message.amount_uspx = String(object.amount_uspx);
                if (object.is_accepted != null)
                    message.is_accepted = Boolean(object.is_accepted);
                if (object.contract_price_ujpy != null)
                    message.contract_price_ujpy = String(object.contract_price_ujpy);
                if (object.is_auto_order != null)
                    message.is_auto_order = Boolean(object.is_auto_order);
                return message;
            };
    
            /**
             * Creates a plain object from a RenewableAskHistory message. Also converts values to other types if specified.
             * @function toObject
             * @memberof main.RenewableAskHistory
             * @static
             * @param {main.RenewableAskHistory} message RenewableAskHistory
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            RenewableAskHistory.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (options.defaults) {
                    object.id = "";
                    object.type = options.enums === String ? "UNKNOWN" : 0;
                    object.account_id = "";
                    object.price_ujpy = "";
                    object.amount_uspx = "";
                    object.is_accepted = false;
                    object.contract_price_ujpy = "";
                    object.is_auto_order = false;
                }
                if (message.id != null && message.hasOwnProperty("id"))
                    object.id = message.id;
                if (message.type != null && message.hasOwnProperty("type"))
                    object.type = options.enums === String ? $root.main.RenewableAskHistoryType[message.type] : message.type;
                if (message.account_id != null && message.hasOwnProperty("account_id"))
                    object.account_id = message.account_id;
                if (message.price_ujpy != null && message.hasOwnProperty("price_ujpy"))
                    object.price_ujpy = message.price_ujpy;
                if (message.amount_uspx != null && message.hasOwnProperty("amount_uspx"))
                    object.amount_uspx = message.amount_uspx;
                if (message.is_accepted != null && message.hasOwnProperty("is_accepted"))
                    object.is_accepted = message.is_accepted;
                if (message.contract_price_ujpy != null && message.hasOwnProperty("contract_price_ujpy"))
                    object.contract_price_ujpy = message.contract_price_ujpy;
                if (message.is_auto_order != null && message.hasOwnProperty("is_auto_order"))
                    object.is_auto_order = message.is_auto_order;
                return object;
            };
    
            /**
             * Converts this RenewableAskHistory to JSON.
             * @function toJSON
             * @memberof main.RenewableAskHistory
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            RenewableAskHistory.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };
    
            return RenewableAskHistory;
        })();
    
        main.RenewableAskSetting = (function() {
    
            /**
             * Properties of a RenewableAskSetting.
             * @memberof main
             * @interface IRenewableAskSetting
             * @property {string|null} [id] RenewableAskSetting id
             * @property {string|null} [price_ujpy] RenewableAskSetting price_ujpy
             * @property {string|null} [amount_uspx] RenewableAskSetting amount_uspx
             */
    
            /**
             * Constructs a new RenewableAskSetting.
             * @memberof main
             * @classdesc Represents a RenewableAskSetting.
             * @implements IRenewableAskSetting
             * @constructor
             * @param {main.IRenewableAskSetting=} [properties] Properties to set
             */
            function RenewableAskSetting(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }
    
            /**
             * RenewableAskSetting id.
             * @member {string} id
             * @memberof main.RenewableAskSetting
             * @instance
             */
            RenewableAskSetting.prototype.id = "";
    
            /**
             * RenewableAskSetting price_ujpy.
             * @member {string} price_ujpy
             * @memberof main.RenewableAskSetting
             * @instance
             */
            RenewableAskSetting.prototype.price_ujpy = "";
    
            /**
             * RenewableAskSetting amount_uspx.
             * @member {string} amount_uspx
             * @memberof main.RenewableAskSetting
             * @instance
             */
            RenewableAskSetting.prototype.amount_uspx = "";
    
            /**
             * Encodes the specified RenewableAskSetting message. Does not implicitly {@link main.RenewableAskSetting.verify|verify} messages.
             * @function encode
             * @memberof main.RenewableAskSetting
             * @static
             * @param {main.IRenewableAskSetting} message RenewableAskSetting message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            RenewableAskSetting.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.id != null && Object.hasOwnProperty.call(message, "id"))
                    writer.uint32(/* id 1, wireType 2 =*/10).string(message.id);
                if (message.price_ujpy != null && Object.hasOwnProperty.call(message, "price_ujpy"))
                    writer.uint32(/* id 2, wireType 2 =*/18).string(message.price_ujpy);
                if (message.amount_uspx != null && Object.hasOwnProperty.call(message, "amount_uspx"))
                    writer.uint32(/* id 3, wireType 2 =*/26).string(message.amount_uspx);
                return writer;
            };
    
            /**
             * Encodes the specified RenewableAskSetting message, length delimited. Does not implicitly {@link main.RenewableAskSetting.verify|verify} messages.
             * @function encodeDelimited
             * @memberof main.RenewableAskSetting
             * @static
             * @param {main.IRenewableAskSetting} message RenewableAskSetting message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            RenewableAskSetting.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };
    
            /**
             * Decodes a RenewableAskSetting message from the specified reader or buffer.
             * @function decode
             * @memberof main.RenewableAskSetting
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {main.RenewableAskSetting} RenewableAskSetting
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            RenewableAskSetting.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.main.RenewableAskSetting();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1:
                        message.id = reader.string();
                        break;
                    case 2:
                        message.price_ujpy = reader.string();
                        break;
                    case 3:
                        message.amount_uspx = reader.string();
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };
    
            /**
             * Decodes a RenewableAskSetting message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof main.RenewableAskSetting
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {main.RenewableAskSetting} RenewableAskSetting
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            RenewableAskSetting.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };
    
            /**
             * Verifies a RenewableAskSetting message.
             * @function verify
             * @memberof main.RenewableAskSetting
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            RenewableAskSetting.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.id != null && message.hasOwnProperty("id"))
                    if (!$util.isString(message.id))
                        return "id: string expected";
                if (message.price_ujpy != null && message.hasOwnProperty("price_ujpy"))
                    if (!$util.isString(message.price_ujpy))
                        return "price_ujpy: string expected";
                if (message.amount_uspx != null && message.hasOwnProperty("amount_uspx"))
                    if (!$util.isString(message.amount_uspx))
                        return "amount_uspx: string expected";
                return null;
            };
    
            /**
             * Creates a RenewableAskSetting message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof main.RenewableAskSetting
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {main.RenewableAskSetting} RenewableAskSetting
             */
            RenewableAskSetting.fromObject = function fromObject(object) {
                if (object instanceof $root.main.RenewableAskSetting)
                    return object;
                var message = new $root.main.RenewableAskSetting();
                if (object.id != null)
                    message.id = String(object.id);
                if (object.price_ujpy != null)
                    message.price_ujpy = String(object.price_ujpy);
                if (object.amount_uspx != null)
                    message.amount_uspx = String(object.amount_uspx);
                return message;
            };
    
            /**
             * Creates a plain object from a RenewableAskSetting message. Also converts values to other types if specified.
             * @function toObject
             * @memberof main.RenewableAskSetting
             * @static
             * @param {main.RenewableAskSetting} message RenewableAskSetting
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            RenewableAskSetting.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (options.defaults) {
                    object.id = "";
                    object.price_ujpy = "";
                    object.amount_uspx = "";
                }
                if (message.id != null && message.hasOwnProperty("id"))
                    object.id = message.id;
                if (message.price_ujpy != null && message.hasOwnProperty("price_ujpy"))
                    object.price_ujpy = message.price_ujpy;
                if (message.amount_uspx != null && message.hasOwnProperty("amount_uspx"))
                    object.amount_uspx = message.amount_uspx;
                return object;
            };
    
            /**
             * Converts this RenewableAskSetting to JSON.
             * @function toJSON
             * @memberof main.RenewableAskSetting
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            RenewableAskSetting.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };
    
            return RenewableAskSetting;
        })();
    
        /**
         * RenewableAskType enum.
         * @name main.RenewableAskType
         * @enum {number}
         * @property {number} UNKNOWN=0 UNKNOWN value
         * @property {number} PRIMARY=1 PRIMARY value
         * @property {number} SECONDARY=2 SECONDARY value
         */
        main.RenewableAskType = (function() {
            var valuesById = {}, values = Object.create(valuesById);
            values[valuesById[0] = "UNKNOWN"] = 0;
            values[valuesById[1] = "PRIMARY"] = 1;
            values[valuesById[2] = "SECONDARY"] = 2;
            return values;
        })();
    
        main.RenewableAsk = (function() {
    
            /**
             * Properties of a RenewableAsk.
             * @memberof main
             * @interface IRenewableAsk
             * @property {string|null} [id] RenewableAsk id
             * @property {main.RenewableAskType|null} [type] RenewableAsk type
             * @property {string|null} [account_id] RenewableAsk account_id
             * @property {string|null} [price_ujpy] RenewableAsk price_ujpy
             * @property {string|null} [amount_uspx] RenewableAsk amount_uspx
             * @property {boolean|null} [is_deleted] RenewableAsk is_deleted
             * @property {boolean|null} [is_auto_order] RenewableAsk is_auto_order
             */
    
            /**
             * Constructs a new RenewableAsk.
             * @memberof main
             * @classdesc Represents a RenewableAsk.
             * @implements IRenewableAsk
             * @constructor
             * @param {main.IRenewableAsk=} [properties] Properties to set
             */
            function RenewableAsk(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }
    
            /**
             * RenewableAsk id.
             * @member {string} id
             * @memberof main.RenewableAsk
             * @instance
             */
            RenewableAsk.prototype.id = "";
    
            /**
             * RenewableAsk type.
             * @member {main.RenewableAskType} type
             * @memberof main.RenewableAsk
             * @instance
             */
            RenewableAsk.prototype.type = 0;
    
            /**
             * RenewableAsk account_id.
             * @member {string} account_id
             * @memberof main.RenewableAsk
             * @instance
             */
            RenewableAsk.prototype.account_id = "";
    
            /**
             * RenewableAsk price_ujpy.
             * @member {string} price_ujpy
             * @memberof main.RenewableAsk
             * @instance
             */
            RenewableAsk.prototype.price_ujpy = "";
    
            /**
             * RenewableAsk amount_uspx.
             * @member {string} amount_uspx
             * @memberof main.RenewableAsk
             * @instance
             */
            RenewableAsk.prototype.amount_uspx = "";
    
            /**
             * RenewableAsk is_deleted.
             * @member {boolean} is_deleted
             * @memberof main.RenewableAsk
             * @instance
             */
            RenewableAsk.prototype.is_deleted = false;
    
            /**
             * RenewableAsk is_auto_order.
             * @member {boolean} is_auto_order
             * @memberof main.RenewableAsk
             * @instance
             */
            RenewableAsk.prototype.is_auto_order = false;
    
            /**
             * Encodes the specified RenewableAsk message. Does not implicitly {@link main.RenewableAsk.verify|verify} messages.
             * @function encode
             * @memberof main.RenewableAsk
             * @static
             * @param {main.IRenewableAsk} message RenewableAsk message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            RenewableAsk.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.id != null && Object.hasOwnProperty.call(message, "id"))
                    writer.uint32(/* id 1, wireType 2 =*/10).string(message.id);
                if (message.type != null && Object.hasOwnProperty.call(message, "type"))
                    writer.uint32(/* id 2, wireType 0 =*/16).int32(message.type);
                if (message.account_id != null && Object.hasOwnProperty.call(message, "account_id"))
                    writer.uint32(/* id 3, wireType 2 =*/26).string(message.account_id);
                if (message.price_ujpy != null && Object.hasOwnProperty.call(message, "price_ujpy"))
                    writer.uint32(/* id 4, wireType 2 =*/34).string(message.price_ujpy);
                if (message.amount_uspx != null && Object.hasOwnProperty.call(message, "amount_uspx"))
                    writer.uint32(/* id 5, wireType 2 =*/42).string(message.amount_uspx);
                if (message.is_deleted != null && Object.hasOwnProperty.call(message, "is_deleted"))
                    writer.uint32(/* id 6, wireType 0 =*/48).bool(message.is_deleted);
                if (message.is_auto_order != null && Object.hasOwnProperty.call(message, "is_auto_order"))
                    writer.uint32(/* id 7, wireType 0 =*/56).bool(message.is_auto_order);
                return writer;
            };
    
            /**
             * Encodes the specified RenewableAsk message, length delimited. Does not implicitly {@link main.RenewableAsk.verify|verify} messages.
             * @function encodeDelimited
             * @memberof main.RenewableAsk
             * @static
             * @param {main.IRenewableAsk} message RenewableAsk message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            RenewableAsk.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };
    
            /**
             * Decodes a RenewableAsk message from the specified reader or buffer.
             * @function decode
             * @memberof main.RenewableAsk
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {main.RenewableAsk} RenewableAsk
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            RenewableAsk.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.main.RenewableAsk();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1:
                        message.id = reader.string();
                        break;
                    case 2:
                        message.type = reader.int32();
                        break;
                    case 3:
                        message.account_id = reader.string();
                        break;
                    case 4:
                        message.price_ujpy = reader.string();
                        break;
                    case 5:
                        message.amount_uspx = reader.string();
                        break;
                    case 6:
                        message.is_deleted = reader.bool();
                        break;
                    case 7:
                        message.is_auto_order = reader.bool();
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };
    
            /**
             * Decodes a RenewableAsk message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof main.RenewableAsk
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {main.RenewableAsk} RenewableAsk
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            RenewableAsk.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };
    
            /**
             * Verifies a RenewableAsk message.
             * @function verify
             * @memberof main.RenewableAsk
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            RenewableAsk.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.id != null && message.hasOwnProperty("id"))
                    if (!$util.isString(message.id))
                        return "id: string expected";
                if (message.type != null && message.hasOwnProperty("type"))
                    switch (message.type) {
                    default:
                        return "type: enum value expected";
                    case 0:
                    case 1:
                    case 2:
                        break;
                    }
                if (message.account_id != null && message.hasOwnProperty("account_id"))
                    if (!$util.isString(message.account_id))
                        return "account_id: string expected";
                if (message.price_ujpy != null && message.hasOwnProperty("price_ujpy"))
                    if (!$util.isString(message.price_ujpy))
                        return "price_ujpy: string expected";
                if (message.amount_uspx != null && message.hasOwnProperty("amount_uspx"))
                    if (!$util.isString(message.amount_uspx))
                        return "amount_uspx: string expected";
                if (message.is_deleted != null && message.hasOwnProperty("is_deleted"))
                    if (typeof message.is_deleted !== "boolean")
                        return "is_deleted: boolean expected";
                if (message.is_auto_order != null && message.hasOwnProperty("is_auto_order"))
                    if (typeof message.is_auto_order !== "boolean")
                        return "is_auto_order: boolean expected";
                return null;
            };
    
            /**
             * Creates a RenewableAsk message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof main.RenewableAsk
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {main.RenewableAsk} RenewableAsk
             */
            RenewableAsk.fromObject = function fromObject(object) {
                if (object instanceof $root.main.RenewableAsk)
                    return object;
                var message = new $root.main.RenewableAsk();
                if (object.id != null)
                    message.id = String(object.id);
                switch (object.type) {
                case "UNKNOWN":
                case 0:
                    message.type = 0;
                    break;
                case "PRIMARY":
                case 1:
                    message.type = 1;
                    break;
                case "SECONDARY":
                case 2:
                    message.type = 2;
                    break;
                }
                if (object.account_id != null)
                    message.account_id = String(object.account_id);
                if (object.price_ujpy != null)
                    message.price_ujpy = String(object.price_ujpy);
                if (object.amount_uspx != null)
                    message.amount_uspx = String(object.amount_uspx);
                if (object.is_deleted != null)
                    message.is_deleted = Boolean(object.is_deleted);
                if (object.is_auto_order != null)
                    message.is_auto_order = Boolean(object.is_auto_order);
                return message;
            };
    
            /**
             * Creates a plain object from a RenewableAsk message. Also converts values to other types if specified.
             * @function toObject
             * @memberof main.RenewableAsk
             * @static
             * @param {main.RenewableAsk} message RenewableAsk
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            RenewableAsk.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (options.defaults) {
                    object.id = "";
                    object.type = options.enums === String ? "UNKNOWN" : 0;
                    object.account_id = "";
                    object.price_ujpy = "";
                    object.amount_uspx = "";
                    object.is_deleted = false;
                    object.is_auto_order = false;
                }
                if (message.id != null && message.hasOwnProperty("id"))
                    object.id = message.id;
                if (message.type != null && message.hasOwnProperty("type"))
                    object.type = options.enums === String ? $root.main.RenewableAskType[message.type] : message.type;
                if (message.account_id != null && message.hasOwnProperty("account_id"))
                    object.account_id = message.account_id;
                if (message.price_ujpy != null && message.hasOwnProperty("price_ujpy"))
                    object.price_ujpy = message.price_ujpy;
                if (message.amount_uspx != null && message.hasOwnProperty("amount_uspx"))
                    object.amount_uspx = message.amount_uspx;
                if (message.is_deleted != null && message.hasOwnProperty("is_deleted"))
                    object.is_deleted = message.is_deleted;
                if (message.is_auto_order != null && message.hasOwnProperty("is_auto_order"))
                    object.is_auto_order = message.is_auto_order;
                return object;
            };
    
            /**
             * Converts this RenewableAsk to JSON.
             * @function toJSON
             * @memberof main.RenewableAsk
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            RenewableAsk.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };
    
            return RenewableAsk;
        })();
    
        main.RenewableBidDelete = (function() {
    
            /**
             * Properties of a RenewableBidDelete.
             * @memberof main
             * @interface IRenewableBidDelete
             * @property {string|null} [id] RenewableBidDelete id
             * @property {string|null} [bid_id] RenewableBidDelete bid_id
             */
    
            /**
             * Constructs a new RenewableBidDelete.
             * @memberof main
             * @classdesc Represents a RenewableBidDelete.
             * @implements IRenewableBidDelete
             * @constructor
             * @param {main.IRenewableBidDelete=} [properties] Properties to set
             */
            function RenewableBidDelete(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }
    
            /**
             * RenewableBidDelete id.
             * @member {string} id
             * @memberof main.RenewableBidDelete
             * @instance
             */
            RenewableBidDelete.prototype.id = "";
    
            /**
             * RenewableBidDelete bid_id.
             * @member {string} bid_id
             * @memberof main.RenewableBidDelete
             * @instance
             */
            RenewableBidDelete.prototype.bid_id = "";
    
            /**
             * Encodes the specified RenewableBidDelete message. Does not implicitly {@link main.RenewableBidDelete.verify|verify} messages.
             * @function encode
             * @memberof main.RenewableBidDelete
             * @static
             * @param {main.IRenewableBidDelete} message RenewableBidDelete message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            RenewableBidDelete.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.id != null && Object.hasOwnProperty.call(message, "id"))
                    writer.uint32(/* id 1, wireType 2 =*/10).string(message.id);
                if (message.bid_id != null && Object.hasOwnProperty.call(message, "bid_id"))
                    writer.uint32(/* id 2, wireType 2 =*/18).string(message.bid_id);
                return writer;
            };
    
            /**
             * Encodes the specified RenewableBidDelete message, length delimited. Does not implicitly {@link main.RenewableBidDelete.verify|verify} messages.
             * @function encodeDelimited
             * @memberof main.RenewableBidDelete
             * @static
             * @param {main.IRenewableBidDelete} message RenewableBidDelete message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            RenewableBidDelete.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };
    
            /**
             * Decodes a RenewableBidDelete message from the specified reader or buffer.
             * @function decode
             * @memberof main.RenewableBidDelete
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {main.RenewableBidDelete} RenewableBidDelete
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            RenewableBidDelete.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.main.RenewableBidDelete();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1:
                        message.id = reader.string();
                        break;
                    case 2:
                        message.bid_id = reader.string();
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };
    
            /**
             * Decodes a RenewableBidDelete message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof main.RenewableBidDelete
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {main.RenewableBidDelete} RenewableBidDelete
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            RenewableBidDelete.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };
    
            /**
             * Verifies a RenewableBidDelete message.
             * @function verify
             * @memberof main.RenewableBidDelete
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            RenewableBidDelete.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.id != null && message.hasOwnProperty("id"))
                    if (!$util.isString(message.id))
                        return "id: string expected";
                if (message.bid_id != null && message.hasOwnProperty("bid_id"))
                    if (!$util.isString(message.bid_id))
                        return "bid_id: string expected";
                return null;
            };
    
            /**
             * Creates a RenewableBidDelete message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof main.RenewableBidDelete
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {main.RenewableBidDelete} RenewableBidDelete
             */
            RenewableBidDelete.fromObject = function fromObject(object) {
                if (object instanceof $root.main.RenewableBidDelete)
                    return object;
                var message = new $root.main.RenewableBidDelete();
                if (object.id != null)
                    message.id = String(object.id);
                if (object.bid_id != null)
                    message.bid_id = String(object.bid_id);
                return message;
            };
    
            /**
             * Creates a plain object from a RenewableBidDelete message. Also converts values to other types if specified.
             * @function toObject
             * @memberof main.RenewableBidDelete
             * @static
             * @param {main.RenewableBidDelete} message RenewableBidDelete
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            RenewableBidDelete.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (options.defaults) {
                    object.id = "";
                    object.bid_id = "";
                }
                if (message.id != null && message.hasOwnProperty("id"))
                    object.id = message.id;
                if (message.bid_id != null && message.hasOwnProperty("bid_id"))
                    object.bid_id = message.bid_id;
                return object;
            };
    
            /**
             * Converts this RenewableBidDelete to JSON.
             * @function toJSON
             * @memberof main.RenewableBidDelete
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            RenewableBidDelete.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };
    
            return RenewableBidDelete;
        })();
    
        main.RenewableBidHistory = (function() {
    
            /**
             * Properties of a RenewableBidHistory.
             * @memberof main
             * @interface IRenewableBidHistory
             * @property {string|null} [id] RenewableBidHistory id
             * @property {string|null} [account_id] RenewableBidHistory account_id
             * @property {string|null} [price_ujpy] RenewableBidHistory price_ujpy
             * @property {string|null} [amount_uspx] RenewableBidHistory amount_uspx
             * @property {boolean|null} [is_accepted] RenewableBidHistory is_accepted
             * @property {string|null} [contract_price_ujpy] RenewableBidHistory contract_price_ujpy
             * @property {boolean|null} [is_auto_order] RenewableBidHistory is_auto_order
             */
    
            /**
             * Constructs a new RenewableBidHistory.
             * @memberof main
             * @classdesc Represents a RenewableBidHistory.
             * @implements IRenewableBidHistory
             * @constructor
             * @param {main.IRenewableBidHistory=} [properties] Properties to set
             */
            function RenewableBidHistory(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }
    
            /**
             * RenewableBidHistory id.
             * @member {string} id
             * @memberof main.RenewableBidHistory
             * @instance
             */
            RenewableBidHistory.prototype.id = "";
    
            /**
             * RenewableBidHistory account_id.
             * @member {string} account_id
             * @memberof main.RenewableBidHistory
             * @instance
             */
            RenewableBidHistory.prototype.account_id = "";
    
            /**
             * RenewableBidHistory price_ujpy.
             * @member {string} price_ujpy
             * @memberof main.RenewableBidHistory
             * @instance
             */
            RenewableBidHistory.prototype.price_ujpy = "";
    
            /**
             * RenewableBidHistory amount_uspx.
             * @member {string} amount_uspx
             * @memberof main.RenewableBidHistory
             * @instance
             */
            RenewableBidHistory.prototype.amount_uspx = "";
    
            /**
             * RenewableBidHistory is_accepted.
             * @member {boolean} is_accepted
             * @memberof main.RenewableBidHistory
             * @instance
             */
            RenewableBidHistory.prototype.is_accepted = false;
    
            /**
             * RenewableBidHistory contract_price_ujpy.
             * @member {string} contract_price_ujpy
             * @memberof main.RenewableBidHistory
             * @instance
             */
            RenewableBidHistory.prototype.contract_price_ujpy = "";
    
            /**
             * RenewableBidHistory is_auto_order.
             * @member {boolean} is_auto_order
             * @memberof main.RenewableBidHistory
             * @instance
             */
            RenewableBidHistory.prototype.is_auto_order = false;
    
            /**
             * Encodes the specified RenewableBidHistory message. Does not implicitly {@link main.RenewableBidHistory.verify|verify} messages.
             * @function encode
             * @memberof main.RenewableBidHistory
             * @static
             * @param {main.IRenewableBidHistory} message RenewableBidHistory message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            RenewableBidHistory.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.id != null && Object.hasOwnProperty.call(message, "id"))
                    writer.uint32(/* id 1, wireType 2 =*/10).string(message.id);
                if (message.account_id != null && Object.hasOwnProperty.call(message, "account_id"))
                    writer.uint32(/* id 2, wireType 2 =*/18).string(message.account_id);
                if (message.price_ujpy != null && Object.hasOwnProperty.call(message, "price_ujpy"))
                    writer.uint32(/* id 3, wireType 2 =*/26).string(message.price_ujpy);
                if (message.amount_uspx != null && Object.hasOwnProperty.call(message, "amount_uspx"))
                    writer.uint32(/* id 4, wireType 2 =*/34).string(message.amount_uspx);
                if (message.is_accepted != null && Object.hasOwnProperty.call(message, "is_accepted"))
                    writer.uint32(/* id 5, wireType 0 =*/40).bool(message.is_accepted);
                if (message.contract_price_ujpy != null && Object.hasOwnProperty.call(message, "contract_price_ujpy"))
                    writer.uint32(/* id 6, wireType 2 =*/50).string(message.contract_price_ujpy);
                if (message.is_auto_order != null && Object.hasOwnProperty.call(message, "is_auto_order"))
                    writer.uint32(/* id 7, wireType 0 =*/56).bool(message.is_auto_order);
                return writer;
            };
    
            /**
             * Encodes the specified RenewableBidHistory message, length delimited. Does not implicitly {@link main.RenewableBidHistory.verify|verify} messages.
             * @function encodeDelimited
             * @memberof main.RenewableBidHistory
             * @static
             * @param {main.IRenewableBidHistory} message RenewableBidHistory message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            RenewableBidHistory.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };
    
            /**
             * Decodes a RenewableBidHistory message from the specified reader or buffer.
             * @function decode
             * @memberof main.RenewableBidHistory
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {main.RenewableBidHistory} RenewableBidHistory
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            RenewableBidHistory.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.main.RenewableBidHistory();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1:
                        message.id = reader.string();
                        break;
                    case 2:
                        message.account_id = reader.string();
                        break;
                    case 3:
                        message.price_ujpy = reader.string();
                        break;
                    case 4:
                        message.amount_uspx = reader.string();
                        break;
                    case 5:
                        message.is_accepted = reader.bool();
                        break;
                    case 6:
                        message.contract_price_ujpy = reader.string();
                        break;
                    case 7:
                        message.is_auto_order = reader.bool();
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };
    
            /**
             * Decodes a RenewableBidHistory message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof main.RenewableBidHistory
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {main.RenewableBidHistory} RenewableBidHistory
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            RenewableBidHistory.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };
    
            /**
             * Verifies a RenewableBidHistory message.
             * @function verify
             * @memberof main.RenewableBidHistory
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            RenewableBidHistory.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.id != null && message.hasOwnProperty("id"))
                    if (!$util.isString(message.id))
                        return "id: string expected";
                if (message.account_id != null && message.hasOwnProperty("account_id"))
                    if (!$util.isString(message.account_id))
                        return "account_id: string expected";
                if (message.price_ujpy != null && message.hasOwnProperty("price_ujpy"))
                    if (!$util.isString(message.price_ujpy))
                        return "price_ujpy: string expected";
                if (message.amount_uspx != null && message.hasOwnProperty("amount_uspx"))
                    if (!$util.isString(message.amount_uspx))
                        return "amount_uspx: string expected";
                if (message.is_accepted != null && message.hasOwnProperty("is_accepted"))
                    if (typeof message.is_accepted !== "boolean")
                        return "is_accepted: boolean expected";
                if (message.contract_price_ujpy != null && message.hasOwnProperty("contract_price_ujpy"))
                    if (!$util.isString(message.contract_price_ujpy))
                        return "contract_price_ujpy: string expected";
                if (message.is_auto_order != null && message.hasOwnProperty("is_auto_order"))
                    if (typeof message.is_auto_order !== "boolean")
                        return "is_auto_order: boolean expected";
                return null;
            };
    
            /**
             * Creates a RenewableBidHistory message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof main.RenewableBidHistory
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {main.RenewableBidHistory} RenewableBidHistory
             */
            RenewableBidHistory.fromObject = function fromObject(object) {
                if (object instanceof $root.main.RenewableBidHistory)
                    return object;
                var message = new $root.main.RenewableBidHistory();
                if (object.id != null)
                    message.id = String(object.id);
                if (object.account_id != null)
                    message.account_id = String(object.account_id);
                if (object.price_ujpy != null)
                    message.price_ujpy = String(object.price_ujpy);
                if (object.amount_uspx != null)
                    message.amount_uspx = String(object.amount_uspx);
                if (object.is_accepted != null)
                    message.is_accepted = Boolean(object.is_accepted);
                if (object.contract_price_ujpy != null)
                    message.contract_price_ujpy = String(object.contract_price_ujpy);
                if (object.is_auto_order != null)
                    message.is_auto_order = Boolean(object.is_auto_order);
                return message;
            };
    
            /**
             * Creates a plain object from a RenewableBidHistory message. Also converts values to other types if specified.
             * @function toObject
             * @memberof main.RenewableBidHistory
             * @static
             * @param {main.RenewableBidHistory} message RenewableBidHistory
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            RenewableBidHistory.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (options.defaults) {
                    object.id = "";
                    object.account_id = "";
                    object.price_ujpy = "";
                    object.amount_uspx = "";
                    object.is_accepted = false;
                    object.contract_price_ujpy = "";
                    object.is_auto_order = false;
                }
                if (message.id != null && message.hasOwnProperty("id"))
                    object.id = message.id;
                if (message.account_id != null && message.hasOwnProperty("account_id"))
                    object.account_id = message.account_id;
                if (message.price_ujpy != null && message.hasOwnProperty("price_ujpy"))
                    object.price_ujpy = message.price_ujpy;
                if (message.amount_uspx != null && message.hasOwnProperty("amount_uspx"))
                    object.amount_uspx = message.amount_uspx;
                if (message.is_accepted != null && message.hasOwnProperty("is_accepted"))
                    object.is_accepted = message.is_accepted;
                if (message.contract_price_ujpy != null && message.hasOwnProperty("contract_price_ujpy"))
                    object.contract_price_ujpy = message.contract_price_ujpy;
                if (message.is_auto_order != null && message.hasOwnProperty("is_auto_order"))
                    object.is_auto_order = message.is_auto_order;
                return object;
            };
    
            /**
             * Converts this RenewableBidHistory to JSON.
             * @function toJSON
             * @memberof main.RenewableBidHistory
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            RenewableBidHistory.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };
    
            return RenewableBidHistory;
        })();
    
        main.RenewableBid = (function() {
    
            /**
             * Properties of a RenewableBid.
             * @memberof main
             * @interface IRenewableBid
             * @property {string|null} [id] RenewableBid id
             * @property {string|null} [account_id] RenewableBid account_id
             * @property {string|null} [price_ujpy] RenewableBid price_ujpy
             * @property {string|null} [amount_uspx] RenewableBid amount_uspx
             * @property {boolean|null} [is_deleted] RenewableBid is_deleted
             * @property {boolean|null} [is_auto_order] RenewableBid is_auto_order
             */
    
            /**
             * Constructs a new RenewableBid.
             * @memberof main
             * @classdesc Represents a RenewableBid.
             * @implements IRenewableBid
             * @constructor
             * @param {main.IRenewableBid=} [properties] Properties to set
             */
            function RenewableBid(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }
    
            /**
             * RenewableBid id.
             * @member {string} id
             * @memberof main.RenewableBid
             * @instance
             */
            RenewableBid.prototype.id = "";
    
            /**
             * RenewableBid account_id.
             * @member {string} account_id
             * @memberof main.RenewableBid
             * @instance
             */
            RenewableBid.prototype.account_id = "";
    
            /**
             * RenewableBid price_ujpy.
             * @member {string} price_ujpy
             * @memberof main.RenewableBid
             * @instance
             */
            RenewableBid.prototype.price_ujpy = "";
    
            /**
             * RenewableBid amount_uspx.
             * @member {string} amount_uspx
             * @memberof main.RenewableBid
             * @instance
             */
            RenewableBid.prototype.amount_uspx = "";
    
            /**
             * RenewableBid is_deleted.
             * @member {boolean} is_deleted
             * @memberof main.RenewableBid
             * @instance
             */
            RenewableBid.prototype.is_deleted = false;
    
            /**
             * RenewableBid is_auto_order.
             * @member {boolean} is_auto_order
             * @memberof main.RenewableBid
             * @instance
             */
            RenewableBid.prototype.is_auto_order = false;
    
            /**
             * Encodes the specified RenewableBid message. Does not implicitly {@link main.RenewableBid.verify|verify} messages.
             * @function encode
             * @memberof main.RenewableBid
             * @static
             * @param {main.IRenewableBid} message RenewableBid message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            RenewableBid.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.id != null && Object.hasOwnProperty.call(message, "id"))
                    writer.uint32(/* id 1, wireType 2 =*/10).string(message.id);
                if (message.account_id != null && Object.hasOwnProperty.call(message, "account_id"))
                    writer.uint32(/* id 2, wireType 2 =*/18).string(message.account_id);
                if (message.price_ujpy != null && Object.hasOwnProperty.call(message, "price_ujpy"))
                    writer.uint32(/* id 3, wireType 2 =*/26).string(message.price_ujpy);
                if (message.amount_uspx != null && Object.hasOwnProperty.call(message, "amount_uspx"))
                    writer.uint32(/* id 4, wireType 2 =*/34).string(message.amount_uspx);
                if (message.is_deleted != null && Object.hasOwnProperty.call(message, "is_deleted"))
                    writer.uint32(/* id 5, wireType 0 =*/40).bool(message.is_deleted);
                if (message.is_auto_order != null && Object.hasOwnProperty.call(message, "is_auto_order"))
                    writer.uint32(/* id 6, wireType 0 =*/48).bool(message.is_auto_order);
                return writer;
            };
    
            /**
             * Encodes the specified RenewableBid message, length delimited. Does not implicitly {@link main.RenewableBid.verify|verify} messages.
             * @function encodeDelimited
             * @memberof main.RenewableBid
             * @static
             * @param {main.IRenewableBid} message RenewableBid message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            RenewableBid.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };
    
            /**
             * Decodes a RenewableBid message from the specified reader or buffer.
             * @function decode
             * @memberof main.RenewableBid
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {main.RenewableBid} RenewableBid
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            RenewableBid.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.main.RenewableBid();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1:
                        message.id = reader.string();
                        break;
                    case 2:
                        message.account_id = reader.string();
                        break;
                    case 3:
                        message.price_ujpy = reader.string();
                        break;
                    case 4:
                        message.amount_uspx = reader.string();
                        break;
                    case 5:
                        message.is_deleted = reader.bool();
                        break;
                    case 6:
                        message.is_auto_order = reader.bool();
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };
    
            /**
             * Decodes a RenewableBid message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof main.RenewableBid
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {main.RenewableBid} RenewableBid
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            RenewableBid.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };
    
            /**
             * Verifies a RenewableBid message.
             * @function verify
             * @memberof main.RenewableBid
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            RenewableBid.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.id != null && message.hasOwnProperty("id"))
                    if (!$util.isString(message.id))
                        return "id: string expected";
                if (message.account_id != null && message.hasOwnProperty("account_id"))
                    if (!$util.isString(message.account_id))
                        return "account_id: string expected";
                if (message.price_ujpy != null && message.hasOwnProperty("price_ujpy"))
                    if (!$util.isString(message.price_ujpy))
                        return "price_ujpy: string expected";
                if (message.amount_uspx != null && message.hasOwnProperty("amount_uspx"))
                    if (!$util.isString(message.amount_uspx))
                        return "amount_uspx: string expected";
                if (message.is_deleted != null && message.hasOwnProperty("is_deleted"))
                    if (typeof message.is_deleted !== "boolean")
                        return "is_deleted: boolean expected";
                if (message.is_auto_order != null && message.hasOwnProperty("is_auto_order"))
                    if (typeof message.is_auto_order !== "boolean")
                        return "is_auto_order: boolean expected";
                return null;
            };
    
            /**
             * Creates a RenewableBid message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof main.RenewableBid
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {main.RenewableBid} RenewableBid
             */
            RenewableBid.fromObject = function fromObject(object) {
                if (object instanceof $root.main.RenewableBid)
                    return object;
                var message = new $root.main.RenewableBid();
                if (object.id != null)
                    message.id = String(object.id);
                if (object.account_id != null)
                    message.account_id = String(object.account_id);
                if (object.price_ujpy != null)
                    message.price_ujpy = String(object.price_ujpy);
                if (object.amount_uspx != null)
                    message.amount_uspx = String(object.amount_uspx);
                if (object.is_deleted != null)
                    message.is_deleted = Boolean(object.is_deleted);
                if (object.is_auto_order != null)
                    message.is_auto_order = Boolean(object.is_auto_order);
                return message;
            };
    
            /**
             * Creates a plain object from a RenewableBid message. Also converts values to other types if specified.
             * @function toObject
             * @memberof main.RenewableBid
             * @static
             * @param {main.RenewableBid} message RenewableBid
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            RenewableBid.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (options.defaults) {
                    object.id = "";
                    object.account_id = "";
                    object.price_ujpy = "";
                    object.amount_uspx = "";
                    object.is_deleted = false;
                    object.is_auto_order = false;
                }
                if (message.id != null && message.hasOwnProperty("id"))
                    object.id = message.id;
                if (message.account_id != null && message.hasOwnProperty("account_id"))
                    object.account_id = message.account_id;
                if (message.price_ujpy != null && message.hasOwnProperty("price_ujpy"))
                    object.price_ujpy = message.price_ujpy;
                if (message.amount_uspx != null && message.hasOwnProperty("amount_uspx"))
                    object.amount_uspx = message.amount_uspx;
                if (message.is_deleted != null && message.hasOwnProperty("is_deleted"))
                    object.is_deleted = message.is_deleted;
                if (message.is_auto_order != null && message.hasOwnProperty("is_auto_order"))
                    object.is_auto_order = message.is_auto_order;
                return object;
            };
    
            /**
             * Converts this RenewableBid to JSON.
             * @function toJSON
             * @memberof main.RenewableBid
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            RenewableBid.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };
    
            return RenewableBid;
        })();
    
        main.RenewableRanking = (function() {
    
            /**
             * Properties of a RenewableRanking.
             * @memberof main
             * @interface IRenewableRanking
             * @property {string|null} [id] RenewableRanking id
             * @property {string|null} [first_student_id] RenewableRanking first_student_id
             * @property {string|null} [second_student_id] RenewableRanking second_student_id
             * @property {string|null} [third_student_id] RenewableRanking third_student_id
             */
    
            /**
             * Constructs a new RenewableRanking.
             * @memberof main
             * @classdesc Represents a RenewableRanking.
             * @implements IRenewableRanking
             * @constructor
             * @param {main.IRenewableRanking=} [properties] Properties to set
             */
            function RenewableRanking(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }
    
            /**
             * RenewableRanking id.
             * @member {string} id
             * @memberof main.RenewableRanking
             * @instance
             */
            RenewableRanking.prototype.id = "";
    
            /**
             * RenewableRanking first_student_id.
             * @member {string} first_student_id
             * @memberof main.RenewableRanking
             * @instance
             */
            RenewableRanking.prototype.first_student_id = "";
    
            /**
             * RenewableRanking second_student_id.
             * @member {string} second_student_id
             * @memberof main.RenewableRanking
             * @instance
             */
            RenewableRanking.prototype.second_student_id = "";
    
            /**
             * RenewableRanking third_student_id.
             * @member {string} third_student_id
             * @memberof main.RenewableRanking
             * @instance
             */
            RenewableRanking.prototype.third_student_id = "";
    
            /**
             * Encodes the specified RenewableRanking message. Does not implicitly {@link main.RenewableRanking.verify|verify} messages.
             * @function encode
             * @memberof main.RenewableRanking
             * @static
             * @param {main.IRenewableRanking} message RenewableRanking message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            RenewableRanking.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.id != null && Object.hasOwnProperty.call(message, "id"))
                    writer.uint32(/* id 1, wireType 2 =*/10).string(message.id);
                if (message.first_student_id != null && Object.hasOwnProperty.call(message, "first_student_id"))
                    writer.uint32(/* id 2, wireType 2 =*/18).string(message.first_student_id);
                if (message.second_student_id != null && Object.hasOwnProperty.call(message, "second_student_id"))
                    writer.uint32(/* id 3, wireType 2 =*/26).string(message.second_student_id);
                if (message.third_student_id != null && Object.hasOwnProperty.call(message, "third_student_id"))
                    writer.uint32(/* id 4, wireType 2 =*/34).string(message.third_student_id);
                return writer;
            };
    
            /**
             * Encodes the specified RenewableRanking message, length delimited. Does not implicitly {@link main.RenewableRanking.verify|verify} messages.
             * @function encodeDelimited
             * @memberof main.RenewableRanking
             * @static
             * @param {main.IRenewableRanking} message RenewableRanking message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            RenewableRanking.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };
    
            /**
             * Decodes a RenewableRanking message from the specified reader or buffer.
             * @function decode
             * @memberof main.RenewableRanking
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {main.RenewableRanking} RenewableRanking
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            RenewableRanking.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.main.RenewableRanking();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1:
                        message.id = reader.string();
                        break;
                    case 2:
                        message.first_student_id = reader.string();
                        break;
                    case 3:
                        message.second_student_id = reader.string();
                        break;
                    case 4:
                        message.third_student_id = reader.string();
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };
    
            /**
             * Decodes a RenewableRanking message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof main.RenewableRanking
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {main.RenewableRanking} RenewableRanking
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            RenewableRanking.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };
    
            /**
             * Verifies a RenewableRanking message.
             * @function verify
             * @memberof main.RenewableRanking
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            RenewableRanking.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.id != null && message.hasOwnProperty("id"))
                    if (!$util.isString(message.id))
                        return "id: string expected";
                if (message.first_student_id != null && message.hasOwnProperty("first_student_id"))
                    if (!$util.isString(message.first_student_id))
                        return "first_student_id: string expected";
                if (message.second_student_id != null && message.hasOwnProperty("second_student_id"))
                    if (!$util.isString(message.second_student_id))
                        return "second_student_id: string expected";
                if (message.third_student_id != null && message.hasOwnProperty("third_student_id"))
                    if (!$util.isString(message.third_student_id))
                        return "third_student_id: string expected";
                return null;
            };
    
            /**
             * Creates a RenewableRanking message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof main.RenewableRanking
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {main.RenewableRanking} RenewableRanking
             */
            RenewableRanking.fromObject = function fromObject(object) {
                if (object instanceof $root.main.RenewableRanking)
                    return object;
                var message = new $root.main.RenewableRanking();
                if (object.id != null)
                    message.id = String(object.id);
                if (object.first_student_id != null)
                    message.first_student_id = String(object.first_student_id);
                if (object.second_student_id != null)
                    message.second_student_id = String(object.second_student_id);
                if (object.third_student_id != null)
                    message.third_student_id = String(object.third_student_id);
                return message;
            };
    
            /**
             * Creates a plain object from a RenewableRanking message. Also converts values to other types if specified.
             * @function toObject
             * @memberof main.RenewableRanking
             * @static
             * @param {main.RenewableRanking} message RenewableRanking
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            RenewableRanking.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (options.defaults) {
                    object.id = "";
                    object.first_student_id = "";
                    object.second_student_id = "";
                    object.third_student_id = "";
                }
                if (message.id != null && message.hasOwnProperty("id"))
                    object.id = message.id;
                if (message.first_student_id != null && message.hasOwnProperty("first_student_id"))
                    object.first_student_id = message.first_student_id;
                if (message.second_student_id != null && message.hasOwnProperty("second_student_id"))
                    object.second_student_id = message.second_student_id;
                if (message.third_student_id != null && message.hasOwnProperty("third_student_id"))
                    object.third_student_id = message.third_student_id;
                return object;
            };
    
            /**
             * Converts this RenewableRanking to JSON.
             * @function toJSON
             * @memberof main.RenewableRanking
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            RenewableRanking.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };
    
            return RenewableRanking;
        })();
    
        main.RenewableRewardSetting = (function() {
    
            /**
             * Properties of a RenewableRewardSetting.
             * @memberof main
             * @interface IRenewableRewardSetting
             * @property {string|null} [id] RenewableRewardSetting id
             * @property {string|null} [first_price_ujpy] RenewableRewardSetting first_price_ujpy
             * @property {string|null} [second_price_ujpy] RenewableRewardSetting second_price_ujpy
             * @property {string|null} [third_price_ujpy] RenewableRewardSetting third_price_ujpy
             */
    
            /**
             * Constructs a new RenewableRewardSetting.
             * @memberof main
             * @classdesc Represents a RenewableRewardSetting.
             * @implements IRenewableRewardSetting
             * @constructor
             * @param {main.IRenewableRewardSetting=} [properties] Properties to set
             */
            function RenewableRewardSetting(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }
    
            /**
             * RenewableRewardSetting id.
             * @member {string} id
             * @memberof main.RenewableRewardSetting
             * @instance
             */
            RenewableRewardSetting.prototype.id = "";
    
            /**
             * RenewableRewardSetting first_price_ujpy.
             * @member {string} first_price_ujpy
             * @memberof main.RenewableRewardSetting
             * @instance
             */
            RenewableRewardSetting.prototype.first_price_ujpy = "";
    
            /**
             * RenewableRewardSetting second_price_ujpy.
             * @member {string} second_price_ujpy
             * @memberof main.RenewableRewardSetting
             * @instance
             */
            RenewableRewardSetting.prototype.second_price_ujpy = "";
    
            /**
             * RenewableRewardSetting third_price_ujpy.
             * @member {string} third_price_ujpy
             * @memberof main.RenewableRewardSetting
             * @instance
             */
            RenewableRewardSetting.prototype.third_price_ujpy = "";
    
            /**
             * Encodes the specified RenewableRewardSetting message. Does not implicitly {@link main.RenewableRewardSetting.verify|verify} messages.
             * @function encode
             * @memberof main.RenewableRewardSetting
             * @static
             * @param {main.IRenewableRewardSetting} message RenewableRewardSetting message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            RenewableRewardSetting.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.id != null && Object.hasOwnProperty.call(message, "id"))
                    writer.uint32(/* id 1, wireType 2 =*/10).string(message.id);
                if (message.first_price_ujpy != null && Object.hasOwnProperty.call(message, "first_price_ujpy"))
                    writer.uint32(/* id 2, wireType 2 =*/18).string(message.first_price_ujpy);
                if (message.second_price_ujpy != null && Object.hasOwnProperty.call(message, "second_price_ujpy"))
                    writer.uint32(/* id 3, wireType 2 =*/26).string(message.second_price_ujpy);
                if (message.third_price_ujpy != null && Object.hasOwnProperty.call(message, "third_price_ujpy"))
                    writer.uint32(/* id 4, wireType 2 =*/34).string(message.third_price_ujpy);
                return writer;
            };
    
            /**
             * Encodes the specified RenewableRewardSetting message, length delimited. Does not implicitly {@link main.RenewableRewardSetting.verify|verify} messages.
             * @function encodeDelimited
             * @memberof main.RenewableRewardSetting
             * @static
             * @param {main.IRenewableRewardSetting} message RenewableRewardSetting message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            RenewableRewardSetting.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };
    
            /**
             * Decodes a RenewableRewardSetting message from the specified reader or buffer.
             * @function decode
             * @memberof main.RenewableRewardSetting
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {main.RenewableRewardSetting} RenewableRewardSetting
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            RenewableRewardSetting.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.main.RenewableRewardSetting();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1:
                        message.id = reader.string();
                        break;
                    case 2:
                        message.first_price_ujpy = reader.string();
                        break;
                    case 3:
                        message.second_price_ujpy = reader.string();
                        break;
                    case 4:
                        message.third_price_ujpy = reader.string();
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };
    
            /**
             * Decodes a RenewableRewardSetting message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof main.RenewableRewardSetting
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {main.RenewableRewardSetting} RenewableRewardSetting
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            RenewableRewardSetting.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };
    
            /**
             * Verifies a RenewableRewardSetting message.
             * @function verify
             * @memberof main.RenewableRewardSetting
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            RenewableRewardSetting.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.id != null && message.hasOwnProperty("id"))
                    if (!$util.isString(message.id))
                        return "id: string expected";
                if (message.first_price_ujpy != null && message.hasOwnProperty("first_price_ujpy"))
                    if (!$util.isString(message.first_price_ujpy))
                        return "first_price_ujpy: string expected";
                if (message.second_price_ujpy != null && message.hasOwnProperty("second_price_ujpy"))
                    if (!$util.isString(message.second_price_ujpy))
                        return "second_price_ujpy: string expected";
                if (message.third_price_ujpy != null && message.hasOwnProperty("third_price_ujpy"))
                    if (!$util.isString(message.third_price_ujpy))
                        return "third_price_ujpy: string expected";
                return null;
            };
    
            /**
             * Creates a RenewableRewardSetting message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof main.RenewableRewardSetting
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {main.RenewableRewardSetting} RenewableRewardSetting
             */
            RenewableRewardSetting.fromObject = function fromObject(object) {
                if (object instanceof $root.main.RenewableRewardSetting)
                    return object;
                var message = new $root.main.RenewableRewardSetting();
                if (object.id != null)
                    message.id = String(object.id);
                if (object.first_price_ujpy != null)
                    message.first_price_ujpy = String(object.first_price_ujpy);
                if (object.second_price_ujpy != null)
                    message.second_price_ujpy = String(object.second_price_ujpy);
                if (object.third_price_ujpy != null)
                    message.third_price_ujpy = String(object.third_price_ujpy);
                return message;
            };
    
            /**
             * Creates a plain object from a RenewableRewardSetting message. Also converts values to other types if specified.
             * @function toObject
             * @memberof main.RenewableRewardSetting
             * @static
             * @param {main.RenewableRewardSetting} message RenewableRewardSetting
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            RenewableRewardSetting.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (options.defaults) {
                    object.id = "";
                    object.first_price_ujpy = "";
                    object.second_price_ujpy = "";
                    object.third_price_ujpy = "";
                }
                if (message.id != null && message.hasOwnProperty("id"))
                    object.id = message.id;
                if (message.first_price_ujpy != null && message.hasOwnProperty("first_price_ujpy"))
                    object.first_price_ujpy = message.first_price_ujpy;
                if (message.second_price_ujpy != null && message.hasOwnProperty("second_price_ujpy"))
                    object.second_price_ujpy = message.second_price_ujpy;
                if (message.third_price_ujpy != null && message.hasOwnProperty("third_price_ujpy"))
                    object.third_price_ujpy = message.third_price_ujpy;
                return object;
            };
    
            /**
             * Converts this RenewableRewardSetting to JSON.
             * @function toJSON
             * @memberof main.RenewableRewardSetting
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            RenewableRewardSetting.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };
    
            return RenewableRewardSetting;
        })();
    
        main.RenewableSettlement = (function() {
    
            /**
             * Properties of a RenewableSettlement.
             * @memberof main
             * @interface IRenewableSettlement
             * @property {string|null} [id] RenewableSettlement id
             * @property {string|null} [bid_id] RenewableSettlement bid_id
             * @property {string|null} [ask_id] RenewableSettlement ask_id
             * @property {string|null} [price_ujpy] RenewableSettlement price_ujpy
             * @property {string|null} [amount_uspx] RenewableSettlement amount_uspx
             */
    
            /**
             * Constructs a new RenewableSettlement.
             * @memberof main
             * @classdesc Represents a RenewableSettlement.
             * @implements IRenewableSettlement
             * @constructor
             * @param {main.IRenewableSettlement=} [properties] Properties to set
             */
            function RenewableSettlement(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }
    
            /**
             * RenewableSettlement id.
             * @member {string} id
             * @memberof main.RenewableSettlement
             * @instance
             */
            RenewableSettlement.prototype.id = "";
    
            /**
             * RenewableSettlement bid_id.
             * @member {string} bid_id
             * @memberof main.RenewableSettlement
             * @instance
             */
            RenewableSettlement.prototype.bid_id = "";
    
            /**
             * RenewableSettlement ask_id.
             * @member {string} ask_id
             * @memberof main.RenewableSettlement
             * @instance
             */
            RenewableSettlement.prototype.ask_id = "";
    
            /**
             * RenewableSettlement price_ujpy.
             * @member {string} price_ujpy
             * @memberof main.RenewableSettlement
             * @instance
             */
            RenewableSettlement.prototype.price_ujpy = "";
    
            /**
             * RenewableSettlement amount_uspx.
             * @member {string} amount_uspx
             * @memberof main.RenewableSettlement
             * @instance
             */
            RenewableSettlement.prototype.amount_uspx = "";
    
            /**
             * Encodes the specified RenewableSettlement message. Does not implicitly {@link main.RenewableSettlement.verify|verify} messages.
             * @function encode
             * @memberof main.RenewableSettlement
             * @static
             * @param {main.IRenewableSettlement} message RenewableSettlement message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            RenewableSettlement.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.id != null && Object.hasOwnProperty.call(message, "id"))
                    writer.uint32(/* id 1, wireType 2 =*/10).string(message.id);
                if (message.bid_id != null && Object.hasOwnProperty.call(message, "bid_id"))
                    writer.uint32(/* id 2, wireType 2 =*/18).string(message.bid_id);
                if (message.ask_id != null && Object.hasOwnProperty.call(message, "ask_id"))
                    writer.uint32(/* id 3, wireType 2 =*/26).string(message.ask_id);
                if (message.price_ujpy != null && Object.hasOwnProperty.call(message, "price_ujpy"))
                    writer.uint32(/* id 4, wireType 2 =*/34).string(message.price_ujpy);
                if (message.amount_uspx != null && Object.hasOwnProperty.call(message, "amount_uspx"))
                    writer.uint32(/* id 5, wireType 2 =*/42).string(message.amount_uspx);
                return writer;
            };
    
            /**
             * Encodes the specified RenewableSettlement message, length delimited. Does not implicitly {@link main.RenewableSettlement.verify|verify} messages.
             * @function encodeDelimited
             * @memberof main.RenewableSettlement
             * @static
             * @param {main.IRenewableSettlement} message RenewableSettlement message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            RenewableSettlement.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };
    
            /**
             * Decodes a RenewableSettlement message from the specified reader or buffer.
             * @function decode
             * @memberof main.RenewableSettlement
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {main.RenewableSettlement} RenewableSettlement
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            RenewableSettlement.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.main.RenewableSettlement();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1:
                        message.id = reader.string();
                        break;
                    case 2:
                        message.bid_id = reader.string();
                        break;
                    case 3:
                        message.ask_id = reader.string();
                        break;
                    case 4:
                        message.price_ujpy = reader.string();
                        break;
                    case 5:
                        message.amount_uspx = reader.string();
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };
    
            /**
             * Decodes a RenewableSettlement message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof main.RenewableSettlement
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {main.RenewableSettlement} RenewableSettlement
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            RenewableSettlement.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };
    
            /**
             * Verifies a RenewableSettlement message.
             * @function verify
             * @memberof main.RenewableSettlement
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            RenewableSettlement.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.id != null && message.hasOwnProperty("id"))
                    if (!$util.isString(message.id))
                        return "id: string expected";
                if (message.bid_id != null && message.hasOwnProperty("bid_id"))
                    if (!$util.isString(message.bid_id))
                        return "bid_id: string expected";
                if (message.ask_id != null && message.hasOwnProperty("ask_id"))
                    if (!$util.isString(message.ask_id))
                        return "ask_id: string expected";
                if (message.price_ujpy != null && message.hasOwnProperty("price_ujpy"))
                    if (!$util.isString(message.price_ujpy))
                        return "price_ujpy: string expected";
                if (message.amount_uspx != null && message.hasOwnProperty("amount_uspx"))
                    if (!$util.isString(message.amount_uspx))
                        return "amount_uspx: string expected";
                return null;
            };
    
            /**
             * Creates a RenewableSettlement message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof main.RenewableSettlement
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {main.RenewableSettlement} RenewableSettlement
             */
            RenewableSettlement.fromObject = function fromObject(object) {
                if (object instanceof $root.main.RenewableSettlement)
                    return object;
                var message = new $root.main.RenewableSettlement();
                if (object.id != null)
                    message.id = String(object.id);
                if (object.bid_id != null)
                    message.bid_id = String(object.bid_id);
                if (object.ask_id != null)
                    message.ask_id = String(object.ask_id);
                if (object.price_ujpy != null)
                    message.price_ujpy = String(object.price_ujpy);
                if (object.amount_uspx != null)
                    message.amount_uspx = String(object.amount_uspx);
                return message;
            };
    
            /**
             * Creates a plain object from a RenewableSettlement message. Also converts values to other types if specified.
             * @function toObject
             * @memberof main.RenewableSettlement
             * @static
             * @param {main.RenewableSettlement} message RenewableSettlement
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            RenewableSettlement.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (options.defaults) {
                    object.id = "";
                    object.bid_id = "";
                    object.ask_id = "";
                    object.price_ujpy = "";
                    object.amount_uspx = "";
                }
                if (message.id != null && message.hasOwnProperty("id"))
                    object.id = message.id;
                if (message.bid_id != null && message.hasOwnProperty("bid_id"))
                    object.bid_id = message.bid_id;
                if (message.ask_id != null && message.hasOwnProperty("ask_id"))
                    object.ask_id = message.ask_id;
                if (message.price_ujpy != null && message.hasOwnProperty("price_ujpy"))
                    object.price_ujpy = message.price_ujpy;
                if (message.amount_uspx != null && message.hasOwnProperty("amount_uspx"))
                    object.amount_uspx = message.amount_uspx;
                return object;
            };
    
            /**
             * Converts this RenewableSettlement to JSON.
             * @function toJSON
             * @memberof main.RenewableSettlement
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            RenewableSettlement.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };
    
            return RenewableSettlement;
        })();
    
        main.RoomChange = (function() {
    
            /**
             * Properties of a RoomChange.
             * @memberof main
             * @interface IRoomChange
             * @property {string|null} [id] RoomChange id
             * @property {string|null} [student_account_id] RoomChange student_account_id
             * @property {string|null} [room_id_before] RoomChange room_id_before
             * @property {string|null} [room_id_after] RoomChange room_id_after
             */
    
            /**
             * Constructs a new RoomChange.
             * @memberof main
             * @classdesc Represents a RoomChange.
             * @implements IRoomChange
             * @constructor
             * @param {main.IRoomChange=} [properties] Properties to set
             */
            function RoomChange(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }
    
            /**
             * RoomChange id.
             * @member {string} id
             * @memberof main.RoomChange
             * @instance
             */
            RoomChange.prototype.id = "";
    
            /**
             * RoomChange student_account_id.
             * @member {string} student_account_id
             * @memberof main.RoomChange
             * @instance
             */
            RoomChange.prototype.student_account_id = "";
    
            /**
             * RoomChange room_id_before.
             * @member {string} room_id_before
             * @memberof main.RoomChange
             * @instance
             */
            RoomChange.prototype.room_id_before = "";
    
            /**
             * RoomChange room_id_after.
             * @member {string} room_id_after
             * @memberof main.RoomChange
             * @instance
             */
            RoomChange.prototype.room_id_after = "";
    
            /**
             * Encodes the specified RoomChange message. Does not implicitly {@link main.RoomChange.verify|verify} messages.
             * @function encode
             * @memberof main.RoomChange
             * @static
             * @param {main.IRoomChange} message RoomChange message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            RoomChange.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.id != null && Object.hasOwnProperty.call(message, "id"))
                    writer.uint32(/* id 1, wireType 2 =*/10).string(message.id);
                if (message.student_account_id != null && Object.hasOwnProperty.call(message, "student_account_id"))
                    writer.uint32(/* id 2, wireType 2 =*/18).string(message.student_account_id);
                if (message.room_id_before != null && Object.hasOwnProperty.call(message, "room_id_before"))
                    writer.uint32(/* id 3, wireType 2 =*/26).string(message.room_id_before);
                if (message.room_id_after != null && Object.hasOwnProperty.call(message, "room_id_after"))
                    writer.uint32(/* id 4, wireType 2 =*/34).string(message.room_id_after);
                return writer;
            };
    
            /**
             * Encodes the specified RoomChange message, length delimited. Does not implicitly {@link main.RoomChange.verify|verify} messages.
             * @function encodeDelimited
             * @memberof main.RoomChange
             * @static
             * @param {main.IRoomChange} message RoomChange message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            RoomChange.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };
    
            /**
             * Decodes a RoomChange message from the specified reader or buffer.
             * @function decode
             * @memberof main.RoomChange
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {main.RoomChange} RoomChange
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            RoomChange.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.main.RoomChange();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1:
                        message.id = reader.string();
                        break;
                    case 2:
                        message.student_account_id = reader.string();
                        break;
                    case 3:
                        message.room_id_before = reader.string();
                        break;
                    case 4:
                        message.room_id_after = reader.string();
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };
    
            /**
             * Decodes a RoomChange message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof main.RoomChange
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {main.RoomChange} RoomChange
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            RoomChange.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };
    
            /**
             * Verifies a RoomChange message.
             * @function verify
             * @memberof main.RoomChange
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            RoomChange.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.id != null && message.hasOwnProperty("id"))
                    if (!$util.isString(message.id))
                        return "id: string expected";
                if (message.student_account_id != null && message.hasOwnProperty("student_account_id"))
                    if (!$util.isString(message.student_account_id))
                        return "student_account_id: string expected";
                if (message.room_id_before != null && message.hasOwnProperty("room_id_before"))
                    if (!$util.isString(message.room_id_before))
                        return "room_id_before: string expected";
                if (message.room_id_after != null && message.hasOwnProperty("room_id_after"))
                    if (!$util.isString(message.room_id_after))
                        return "room_id_after: string expected";
                return null;
            };
    
            /**
             * Creates a RoomChange message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof main.RoomChange
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {main.RoomChange} RoomChange
             */
            RoomChange.fromObject = function fromObject(object) {
                if (object instanceof $root.main.RoomChange)
                    return object;
                var message = new $root.main.RoomChange();
                if (object.id != null)
                    message.id = String(object.id);
                if (object.student_account_id != null)
                    message.student_account_id = String(object.student_account_id);
                if (object.room_id_before != null)
                    message.room_id_before = String(object.room_id_before);
                if (object.room_id_after != null)
                    message.room_id_after = String(object.room_id_after);
                return message;
            };
    
            /**
             * Creates a plain object from a RoomChange message. Also converts values to other types if specified.
             * @function toObject
             * @memberof main.RoomChange
             * @static
             * @param {main.RoomChange} message RoomChange
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            RoomChange.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (options.defaults) {
                    object.id = "";
                    object.student_account_id = "";
                    object.room_id_before = "";
                    object.room_id_after = "";
                }
                if (message.id != null && message.hasOwnProperty("id"))
                    object.id = message.id;
                if (message.student_account_id != null && message.hasOwnProperty("student_account_id"))
                    object.student_account_id = message.student_account_id;
                if (message.room_id_before != null && message.hasOwnProperty("room_id_before"))
                    object.room_id_before = message.room_id_before;
                if (message.room_id_after != null && message.hasOwnProperty("room_id_after"))
                    object.room_id_after = message.room_id_after;
                return object;
            };
    
            /**
             * Converts this RoomChange to JSON.
             * @function toJSON
             * @memberof main.RoomChange
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            RoomChange.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };
    
            return RoomChange;
        })();
    
        main.SinglePriceNormalSettlement = (function() {
    
            /**
             * Properties of a SinglePriceNormalSettlement.
             * @memberof main
             * @interface ISinglePriceNormalSettlement
             * @property {string|null} [id] SinglePriceNormalSettlement id
             * @property {string|null} [price_ujpy] SinglePriceNormalSettlement price_ujpy
             * @property {string|null} [amount_uupx] SinglePriceNormalSettlement amount_uupx
             */
    
            /**
             * Constructs a new SinglePriceNormalSettlement.
             * @memberof main
             * @classdesc Represents a SinglePriceNormalSettlement.
             * @implements ISinglePriceNormalSettlement
             * @constructor
             * @param {main.ISinglePriceNormalSettlement=} [properties] Properties to set
             */
            function SinglePriceNormalSettlement(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }
    
            /**
             * SinglePriceNormalSettlement id.
             * @member {string} id
             * @memberof main.SinglePriceNormalSettlement
             * @instance
             */
            SinglePriceNormalSettlement.prototype.id = "";
    
            /**
             * SinglePriceNormalSettlement price_ujpy.
             * @member {string} price_ujpy
             * @memberof main.SinglePriceNormalSettlement
             * @instance
             */
            SinglePriceNormalSettlement.prototype.price_ujpy = "";
    
            /**
             * SinglePriceNormalSettlement amount_uupx.
             * @member {string} amount_uupx
             * @memberof main.SinglePriceNormalSettlement
             * @instance
             */
            SinglePriceNormalSettlement.prototype.amount_uupx = "";
    
            /**
             * Encodes the specified SinglePriceNormalSettlement message. Does not implicitly {@link main.SinglePriceNormalSettlement.verify|verify} messages.
             * @function encode
             * @memberof main.SinglePriceNormalSettlement
             * @static
             * @param {main.ISinglePriceNormalSettlement} message SinglePriceNormalSettlement message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            SinglePriceNormalSettlement.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.id != null && Object.hasOwnProperty.call(message, "id"))
                    writer.uint32(/* id 1, wireType 2 =*/10).string(message.id);
                if (message.price_ujpy != null && Object.hasOwnProperty.call(message, "price_ujpy"))
                    writer.uint32(/* id 2, wireType 2 =*/18).string(message.price_ujpy);
                if (message.amount_uupx != null && Object.hasOwnProperty.call(message, "amount_uupx"))
                    writer.uint32(/* id 3, wireType 2 =*/26).string(message.amount_uupx);
                return writer;
            };
    
            /**
             * Encodes the specified SinglePriceNormalSettlement message, length delimited. Does not implicitly {@link main.SinglePriceNormalSettlement.verify|verify} messages.
             * @function encodeDelimited
             * @memberof main.SinglePriceNormalSettlement
             * @static
             * @param {main.ISinglePriceNormalSettlement} message SinglePriceNormalSettlement message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            SinglePriceNormalSettlement.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };
    
            /**
             * Decodes a SinglePriceNormalSettlement message from the specified reader or buffer.
             * @function decode
             * @memberof main.SinglePriceNormalSettlement
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {main.SinglePriceNormalSettlement} SinglePriceNormalSettlement
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            SinglePriceNormalSettlement.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.main.SinglePriceNormalSettlement();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1:
                        message.id = reader.string();
                        break;
                    case 2:
                        message.price_ujpy = reader.string();
                        break;
                    case 3:
                        message.amount_uupx = reader.string();
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };
    
            /**
             * Decodes a SinglePriceNormalSettlement message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof main.SinglePriceNormalSettlement
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {main.SinglePriceNormalSettlement} SinglePriceNormalSettlement
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            SinglePriceNormalSettlement.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };
    
            /**
             * Verifies a SinglePriceNormalSettlement message.
             * @function verify
             * @memberof main.SinglePriceNormalSettlement
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            SinglePriceNormalSettlement.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.id != null && message.hasOwnProperty("id"))
                    if (!$util.isString(message.id))
                        return "id: string expected";
                if (message.price_ujpy != null && message.hasOwnProperty("price_ujpy"))
                    if (!$util.isString(message.price_ujpy))
                        return "price_ujpy: string expected";
                if (message.amount_uupx != null && message.hasOwnProperty("amount_uupx"))
                    if (!$util.isString(message.amount_uupx))
                        return "amount_uupx: string expected";
                return null;
            };
    
            /**
             * Creates a SinglePriceNormalSettlement message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof main.SinglePriceNormalSettlement
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {main.SinglePriceNormalSettlement} SinglePriceNormalSettlement
             */
            SinglePriceNormalSettlement.fromObject = function fromObject(object) {
                if (object instanceof $root.main.SinglePriceNormalSettlement)
                    return object;
                var message = new $root.main.SinglePriceNormalSettlement();
                if (object.id != null)
                    message.id = String(object.id);
                if (object.price_ujpy != null)
                    message.price_ujpy = String(object.price_ujpy);
                if (object.amount_uupx != null)
                    message.amount_uupx = String(object.amount_uupx);
                return message;
            };
    
            /**
             * Creates a plain object from a SinglePriceNormalSettlement message. Also converts values to other types if specified.
             * @function toObject
             * @memberof main.SinglePriceNormalSettlement
             * @static
             * @param {main.SinglePriceNormalSettlement} message SinglePriceNormalSettlement
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            SinglePriceNormalSettlement.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (options.defaults) {
                    object.id = "";
                    object.price_ujpy = "";
                    object.amount_uupx = "";
                }
                if (message.id != null && message.hasOwnProperty("id"))
                    object.id = message.id;
                if (message.price_ujpy != null && message.hasOwnProperty("price_ujpy"))
                    object.price_ujpy = message.price_ujpy;
                if (message.amount_uupx != null && message.hasOwnProperty("amount_uupx"))
                    object.amount_uupx = message.amount_uupx;
                return object;
            };
    
            /**
             * Converts this SinglePriceNormalSettlement to JSON.
             * @function toJSON
             * @memberof main.SinglePriceNormalSettlement
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            SinglePriceNormalSettlement.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };
    
            return SinglePriceNormalSettlement;
        })();
    
        main.SinglePriceRenewableSettlement = (function() {
    
            /**
             * Properties of a SinglePriceRenewableSettlement.
             * @memberof main
             * @interface ISinglePriceRenewableSettlement
             * @property {string|null} [id] SinglePriceRenewableSettlement id
             * @property {string|null} [price_ujpy] SinglePriceRenewableSettlement price_ujpy
             * @property {string|null} [amount_uspx] SinglePriceRenewableSettlement amount_uspx
             */
    
            /**
             * Constructs a new SinglePriceRenewableSettlement.
             * @memberof main
             * @classdesc Represents a SinglePriceRenewableSettlement.
             * @implements ISinglePriceRenewableSettlement
             * @constructor
             * @param {main.ISinglePriceRenewableSettlement=} [properties] Properties to set
             */
            function SinglePriceRenewableSettlement(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }
    
            /**
             * SinglePriceRenewableSettlement id.
             * @member {string} id
             * @memberof main.SinglePriceRenewableSettlement
             * @instance
             */
            SinglePriceRenewableSettlement.prototype.id = "";
    
            /**
             * SinglePriceRenewableSettlement price_ujpy.
             * @member {string} price_ujpy
             * @memberof main.SinglePriceRenewableSettlement
             * @instance
             */
            SinglePriceRenewableSettlement.prototype.price_ujpy = "";
    
            /**
             * SinglePriceRenewableSettlement amount_uspx.
             * @member {string} amount_uspx
             * @memberof main.SinglePriceRenewableSettlement
             * @instance
             */
            SinglePriceRenewableSettlement.prototype.amount_uspx = "";
    
            /**
             * Encodes the specified SinglePriceRenewableSettlement message. Does not implicitly {@link main.SinglePriceRenewableSettlement.verify|verify} messages.
             * @function encode
             * @memberof main.SinglePriceRenewableSettlement
             * @static
             * @param {main.ISinglePriceRenewableSettlement} message SinglePriceRenewableSettlement message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            SinglePriceRenewableSettlement.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.id != null && Object.hasOwnProperty.call(message, "id"))
                    writer.uint32(/* id 1, wireType 2 =*/10).string(message.id);
                if (message.price_ujpy != null && Object.hasOwnProperty.call(message, "price_ujpy"))
                    writer.uint32(/* id 2, wireType 2 =*/18).string(message.price_ujpy);
                if (message.amount_uspx != null && Object.hasOwnProperty.call(message, "amount_uspx"))
                    writer.uint32(/* id 3, wireType 2 =*/26).string(message.amount_uspx);
                return writer;
            };
    
            /**
             * Encodes the specified SinglePriceRenewableSettlement message, length delimited. Does not implicitly {@link main.SinglePriceRenewableSettlement.verify|verify} messages.
             * @function encodeDelimited
             * @memberof main.SinglePriceRenewableSettlement
             * @static
             * @param {main.ISinglePriceRenewableSettlement} message SinglePriceRenewableSettlement message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            SinglePriceRenewableSettlement.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };
    
            /**
             * Decodes a SinglePriceRenewableSettlement message from the specified reader or buffer.
             * @function decode
             * @memberof main.SinglePriceRenewableSettlement
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {main.SinglePriceRenewableSettlement} SinglePriceRenewableSettlement
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            SinglePriceRenewableSettlement.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.main.SinglePriceRenewableSettlement();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1:
                        message.id = reader.string();
                        break;
                    case 2:
                        message.price_ujpy = reader.string();
                        break;
                    case 3:
                        message.amount_uspx = reader.string();
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };
    
            /**
             * Decodes a SinglePriceRenewableSettlement message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof main.SinglePriceRenewableSettlement
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {main.SinglePriceRenewableSettlement} SinglePriceRenewableSettlement
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            SinglePriceRenewableSettlement.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };
    
            /**
             * Verifies a SinglePriceRenewableSettlement message.
             * @function verify
             * @memberof main.SinglePriceRenewableSettlement
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            SinglePriceRenewableSettlement.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.id != null && message.hasOwnProperty("id"))
                    if (!$util.isString(message.id))
                        return "id: string expected";
                if (message.price_ujpy != null && message.hasOwnProperty("price_ujpy"))
                    if (!$util.isString(message.price_ujpy))
                        return "price_ujpy: string expected";
                if (message.amount_uspx != null && message.hasOwnProperty("amount_uspx"))
                    if (!$util.isString(message.amount_uspx))
                        return "amount_uspx: string expected";
                return null;
            };
    
            /**
             * Creates a SinglePriceRenewableSettlement message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof main.SinglePriceRenewableSettlement
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {main.SinglePriceRenewableSettlement} SinglePriceRenewableSettlement
             */
            SinglePriceRenewableSettlement.fromObject = function fromObject(object) {
                if (object instanceof $root.main.SinglePriceRenewableSettlement)
                    return object;
                var message = new $root.main.SinglePriceRenewableSettlement();
                if (object.id != null)
                    message.id = String(object.id);
                if (object.price_ujpy != null)
                    message.price_ujpy = String(object.price_ujpy);
                if (object.amount_uspx != null)
                    message.amount_uspx = String(object.amount_uspx);
                return message;
            };
    
            /**
             * Creates a plain object from a SinglePriceRenewableSettlement message. Also converts values to other types if specified.
             * @function toObject
             * @memberof main.SinglePriceRenewableSettlement
             * @static
             * @param {main.SinglePriceRenewableSettlement} message SinglePriceRenewableSettlement
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            SinglePriceRenewableSettlement.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (options.defaults) {
                    object.id = "";
                    object.price_ujpy = "";
                    object.amount_uspx = "";
                }
                if (message.id != null && message.hasOwnProperty("id"))
                    object.id = message.id;
                if (message.price_ujpy != null && message.hasOwnProperty("price_ujpy"))
                    object.price_ujpy = message.price_ujpy;
                if (message.amount_uspx != null && message.hasOwnProperty("amount_uspx"))
                    object.amount_uspx = message.amount_uspx;
                return object;
            };
    
            /**
             * Converts this SinglePriceRenewableSettlement to JSON.
             * @function toJSON
             * @memberof main.SinglePriceRenewableSettlement
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            SinglePriceRenewableSettlement.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };
    
            return SinglePriceRenewableSettlement;
        })();
    
        main.StudentAccount = (function() {
    
            /**
             * Properties of a StudentAccount.
             * @memberof main
             * @interface IStudentAccount
             * @property {string|null} [id] StudentAccount id
             * @property {Array.<string>|null} [user_ids] StudentAccount user_ids
             * @property {string|null} [room_id] StudentAccount room_id
             * @property {string|null} [name] StudentAccount name
             * @property {string|null} [payment_method] StudentAccount payment_method
             * @property {string|null} [xrp_address] StudentAccount xrp_address
             * @property {string|null} [xrp_public_key] StudentAccount xrp_public_key
             * @property {boolean|null} [auto_order] StudentAccount auto_order
             */
    
            /**
             * Constructs a new StudentAccount.
             * @memberof main
             * @classdesc Represents a StudentAccount.
             * @implements IStudentAccount
             * @constructor
             * @param {main.IStudentAccount=} [properties] Properties to set
             */
            function StudentAccount(properties) {
                this.user_ids = [];
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }
    
            /**
             * StudentAccount id.
             * @member {string} id
             * @memberof main.StudentAccount
             * @instance
             */
            StudentAccount.prototype.id = "";
    
            /**
             * StudentAccount user_ids.
             * @member {Array.<string>} user_ids
             * @memberof main.StudentAccount
             * @instance
             */
            StudentAccount.prototype.user_ids = $util.emptyArray;
    
            /**
             * StudentAccount room_id.
             * @member {string} room_id
             * @memberof main.StudentAccount
             * @instance
             */
            StudentAccount.prototype.room_id = "";
    
            /**
             * StudentAccount name.
             * @member {string} name
             * @memberof main.StudentAccount
             * @instance
             */
            StudentAccount.prototype.name = "";
    
            /**
             * StudentAccount payment_method.
             * @member {string} payment_method
             * @memberof main.StudentAccount
             * @instance
             */
            StudentAccount.prototype.payment_method = "";
    
            /**
             * StudentAccount xrp_address.
             * @member {string} xrp_address
             * @memberof main.StudentAccount
             * @instance
             */
            StudentAccount.prototype.xrp_address = "";
    
            /**
             * StudentAccount xrp_public_key.
             * @member {string} xrp_public_key
             * @memberof main.StudentAccount
             * @instance
             */
            StudentAccount.prototype.xrp_public_key = "";
    
            /**
             * StudentAccount auto_order.
             * @member {boolean} auto_order
             * @memberof main.StudentAccount
             * @instance
             */
            StudentAccount.prototype.auto_order = false;
    
            /**
             * Encodes the specified StudentAccount message. Does not implicitly {@link main.StudentAccount.verify|verify} messages.
             * @function encode
             * @memberof main.StudentAccount
             * @static
             * @param {main.IStudentAccount} message StudentAccount message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            StudentAccount.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.id != null && Object.hasOwnProperty.call(message, "id"))
                    writer.uint32(/* id 1, wireType 2 =*/10).string(message.id);
                if (message.user_ids != null && message.user_ids.length)
                    for (var i = 0; i < message.user_ids.length; ++i)
                        writer.uint32(/* id 2, wireType 2 =*/18).string(message.user_ids[i]);
                if (message.room_id != null && Object.hasOwnProperty.call(message, "room_id"))
                    writer.uint32(/* id 3, wireType 2 =*/26).string(message.room_id);
                if (message.name != null && Object.hasOwnProperty.call(message, "name"))
                    writer.uint32(/* id 4, wireType 2 =*/34).string(message.name);
                if (message.payment_method != null && Object.hasOwnProperty.call(message, "payment_method"))
                    writer.uint32(/* id 5, wireType 2 =*/42).string(message.payment_method);
                if (message.xrp_address != null && Object.hasOwnProperty.call(message, "xrp_address"))
                    writer.uint32(/* id 6, wireType 2 =*/50).string(message.xrp_address);
                if (message.xrp_public_key != null && Object.hasOwnProperty.call(message, "xrp_public_key"))
                    writer.uint32(/* id 7, wireType 2 =*/58).string(message.xrp_public_key);
                if (message.auto_order != null && Object.hasOwnProperty.call(message, "auto_order"))
                    writer.uint32(/* id 8, wireType 0 =*/64).bool(message.auto_order);
                return writer;
            };
    
            /**
             * Encodes the specified StudentAccount message, length delimited. Does not implicitly {@link main.StudentAccount.verify|verify} messages.
             * @function encodeDelimited
             * @memberof main.StudentAccount
             * @static
             * @param {main.IStudentAccount} message StudentAccount message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            StudentAccount.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };
    
            /**
             * Decodes a StudentAccount message from the specified reader or buffer.
             * @function decode
             * @memberof main.StudentAccount
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {main.StudentAccount} StudentAccount
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            StudentAccount.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.main.StudentAccount();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1:
                        message.id = reader.string();
                        break;
                    case 2:
                        if (!(message.user_ids && message.user_ids.length))
                            message.user_ids = [];
                        message.user_ids.push(reader.string());
                        break;
                    case 3:
                        message.room_id = reader.string();
                        break;
                    case 4:
                        message.name = reader.string();
                        break;
                    case 5:
                        message.payment_method = reader.string();
                        break;
                    case 6:
                        message.xrp_address = reader.string();
                        break;
                    case 7:
                        message.xrp_public_key = reader.string();
                        break;
                    case 8:
                        message.auto_order = reader.bool();
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };
    
            /**
             * Decodes a StudentAccount message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof main.StudentAccount
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {main.StudentAccount} StudentAccount
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            StudentAccount.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };
    
            /**
             * Verifies a StudentAccount message.
             * @function verify
             * @memberof main.StudentAccount
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            StudentAccount.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.id != null && message.hasOwnProperty("id"))
                    if (!$util.isString(message.id))
                        return "id: string expected";
                if (message.user_ids != null && message.hasOwnProperty("user_ids")) {
                    if (!Array.isArray(message.user_ids))
                        return "user_ids: array expected";
                    for (var i = 0; i < message.user_ids.length; ++i)
                        if (!$util.isString(message.user_ids[i]))
                            return "user_ids: string[] expected";
                }
                if (message.room_id != null && message.hasOwnProperty("room_id"))
                    if (!$util.isString(message.room_id))
                        return "room_id: string expected";
                if (message.name != null && message.hasOwnProperty("name"))
                    if (!$util.isString(message.name))
                        return "name: string expected";
                if (message.payment_method != null && message.hasOwnProperty("payment_method"))
                    if (!$util.isString(message.payment_method))
                        return "payment_method: string expected";
                if (message.xrp_address != null && message.hasOwnProperty("xrp_address"))
                    if (!$util.isString(message.xrp_address))
                        return "xrp_address: string expected";
                if (message.xrp_public_key != null && message.hasOwnProperty("xrp_public_key"))
                    if (!$util.isString(message.xrp_public_key))
                        return "xrp_public_key: string expected";
                if (message.auto_order != null && message.hasOwnProperty("auto_order"))
                    if (typeof message.auto_order !== "boolean")
                        return "auto_order: boolean expected";
                return null;
            };
    
            /**
             * Creates a StudentAccount message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof main.StudentAccount
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {main.StudentAccount} StudentAccount
             */
            StudentAccount.fromObject = function fromObject(object) {
                if (object instanceof $root.main.StudentAccount)
                    return object;
                var message = new $root.main.StudentAccount();
                if (object.id != null)
                    message.id = String(object.id);
                if (object.user_ids) {
                    if (!Array.isArray(object.user_ids))
                        throw TypeError(".main.StudentAccount.user_ids: array expected");
                    message.user_ids = [];
                    for (var i = 0; i < object.user_ids.length; ++i)
                        message.user_ids[i] = String(object.user_ids[i]);
                }
                if (object.room_id != null)
                    message.room_id = String(object.room_id);
                if (object.name != null)
                    message.name = String(object.name);
                if (object.payment_method != null)
                    message.payment_method = String(object.payment_method);
                if (object.xrp_address != null)
                    message.xrp_address = String(object.xrp_address);
                if (object.xrp_public_key != null)
                    message.xrp_public_key = String(object.xrp_public_key);
                if (object.auto_order != null)
                    message.auto_order = Boolean(object.auto_order);
                return message;
            };
    
            /**
             * Creates a plain object from a StudentAccount message. Also converts values to other types if specified.
             * @function toObject
             * @memberof main.StudentAccount
             * @static
             * @param {main.StudentAccount} message StudentAccount
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            StudentAccount.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (options.arrays || options.defaults)
                    object.user_ids = [];
                if (options.defaults) {
                    object.id = "";
                    object.room_id = "";
                    object.name = "";
                    object.payment_method = "";
                    object.xrp_address = "";
                    object.xrp_public_key = "";
                    object.auto_order = false;
                }
                if (message.id != null && message.hasOwnProperty("id"))
                    object.id = message.id;
                if (message.user_ids && message.user_ids.length) {
                    object.user_ids = [];
                    for (var j = 0; j < message.user_ids.length; ++j)
                        object.user_ids[j] = message.user_ids[j];
                }
                if (message.room_id != null && message.hasOwnProperty("room_id"))
                    object.room_id = message.room_id;
                if (message.name != null && message.hasOwnProperty("name"))
                    object.name = message.name;
                if (message.payment_method != null && message.hasOwnProperty("payment_method"))
                    object.payment_method = message.payment_method;
                if (message.xrp_address != null && message.hasOwnProperty("xrp_address"))
                    object.xrp_address = message.xrp_address;
                if (message.xrp_public_key != null && message.hasOwnProperty("xrp_public_key"))
                    object.xrp_public_key = message.xrp_public_key;
                if (message.auto_order != null && message.hasOwnProperty("auto_order"))
                    object.auto_order = message.auto_order;
                return object;
            };
    
            /**
             * Converts this StudentAccount to JSON.
             * @function toJSON
             * @memberof main.StudentAccount
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            StudentAccount.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };
    
            return StudentAccount;
        })();
    
        main.User = (function() {
    
            /**
             * Properties of a User.
             * @memberof main
             * @interface IUser
             * @property {string|null} [id] User id
             * @property {string|null} [current_account_id] User current_account_id
             * @property {Array.<string>|null} [account_ids_order] User account_ids_order
             */
    
            /**
             * Constructs a new User.
             * @memberof main
             * @classdesc Represents a User.
             * @implements IUser
             * @constructor
             * @param {main.IUser=} [properties] Properties to set
             */
            function User(properties) {
                this.account_ids_order = [];
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }
    
            /**
             * User id.
             * @member {string} id
             * @memberof main.User
             * @instance
             */
            User.prototype.id = "";
    
            /**
             * User current_account_id.
             * @member {string} current_account_id
             * @memberof main.User
             * @instance
             */
            User.prototype.current_account_id = "";
    
            /**
             * User account_ids_order.
             * @member {Array.<string>} account_ids_order
             * @memberof main.User
             * @instance
             */
            User.prototype.account_ids_order = $util.emptyArray;
    
            /**
             * Encodes the specified User message. Does not implicitly {@link main.User.verify|verify} messages.
             * @function encode
             * @memberof main.User
             * @static
             * @param {main.IUser} message User message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            User.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.id != null && Object.hasOwnProperty.call(message, "id"))
                    writer.uint32(/* id 1, wireType 2 =*/10).string(message.id);
                if (message.current_account_id != null && Object.hasOwnProperty.call(message, "current_account_id"))
                    writer.uint32(/* id 2, wireType 2 =*/18).string(message.current_account_id);
                if (message.account_ids_order != null && message.account_ids_order.length)
                    for (var i = 0; i < message.account_ids_order.length; ++i)
                        writer.uint32(/* id 3, wireType 2 =*/26).string(message.account_ids_order[i]);
                return writer;
            };
    
            /**
             * Encodes the specified User message, length delimited. Does not implicitly {@link main.User.verify|verify} messages.
             * @function encodeDelimited
             * @memberof main.User
             * @static
             * @param {main.IUser} message User message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            User.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };
    
            /**
             * Decodes a User message from the specified reader or buffer.
             * @function decode
             * @memberof main.User
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {main.User} User
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            User.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.main.User();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1:
                        message.id = reader.string();
                        break;
                    case 2:
                        message.current_account_id = reader.string();
                        break;
                    case 3:
                        if (!(message.account_ids_order && message.account_ids_order.length))
                            message.account_ids_order = [];
                        message.account_ids_order.push(reader.string());
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };
    
            /**
             * Decodes a User message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof main.User
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {main.User} User
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            User.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };
    
            /**
             * Verifies a User message.
             * @function verify
             * @memberof main.User
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            User.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.id != null && message.hasOwnProperty("id"))
                    if (!$util.isString(message.id))
                        return "id: string expected";
                if (message.current_account_id != null && message.hasOwnProperty("current_account_id"))
                    if (!$util.isString(message.current_account_id))
                        return "current_account_id: string expected";
                if (message.account_ids_order != null && message.hasOwnProperty("account_ids_order")) {
                    if (!Array.isArray(message.account_ids_order))
                        return "account_ids_order: array expected";
                    for (var i = 0; i < message.account_ids_order.length; ++i)
                        if (!$util.isString(message.account_ids_order[i]))
                            return "account_ids_order: string[] expected";
                }
                return null;
            };
    
            /**
             * Creates a User message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof main.User
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {main.User} User
             */
            User.fromObject = function fromObject(object) {
                if (object instanceof $root.main.User)
                    return object;
                var message = new $root.main.User();
                if (object.id != null)
                    message.id = String(object.id);
                if (object.current_account_id != null)
                    message.current_account_id = String(object.current_account_id);
                if (object.account_ids_order) {
                    if (!Array.isArray(object.account_ids_order))
                        throw TypeError(".main.User.account_ids_order: array expected");
                    message.account_ids_order = [];
                    for (var i = 0; i < object.account_ids_order.length; ++i)
                        message.account_ids_order[i] = String(object.account_ids_order[i]);
                }
                return message;
            };
    
            /**
             * Creates a plain object from a User message. Also converts values to other types if specified.
             * @function toObject
             * @memberof main.User
             * @static
             * @param {main.User} message User
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            User.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (options.arrays || options.defaults)
                    object.account_ids_order = [];
                if (options.defaults) {
                    object.id = "";
                    object.current_account_id = "";
                }
                if (message.id != null && message.hasOwnProperty("id"))
                    object.id = message.id;
                if (message.current_account_id != null && message.hasOwnProperty("current_account_id"))
                    object.current_account_id = message.current_account_id;
                if (message.account_ids_order && message.account_ids_order.length) {
                    object.account_ids_order = [];
                    for (var j = 0; j < message.account_ids_order.length; ++j)
                        object.account_ids_order[j] = message.account_ids_order[j];
                }
                return object;
            };
    
            /**
             * Converts this User to JSON.
             * @function toJSON
             * @memberof main.User
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            User.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };
    
            return User;
        })();
    
        main.XrplMonthlyTx = (function() {
    
            /**
             * Properties of a XrplMonthlyTx.
             * @memberof main
             * @interface IXrplMonthlyTx
             * @property {string|null} [id] XrplMonthlyTx id
             * @property {Array.<main.ITx>|null} [txs] XrplMonthlyTx txs
             */
    
            /**
             * Constructs a new XrplMonthlyTx.
             * @memberof main
             * @classdesc Represents a XrplMonthlyTx.
             * @implements IXrplMonthlyTx
             * @constructor
             * @param {main.IXrplMonthlyTx=} [properties] Properties to set
             */
            function XrplMonthlyTx(properties) {
                this.txs = [];
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }
    
            /**
             * XrplMonthlyTx id.
             * @member {string} id
             * @memberof main.XrplMonthlyTx
             * @instance
             */
            XrplMonthlyTx.prototype.id = "";
    
            /**
             * XrplMonthlyTx txs.
             * @member {Array.<main.ITx>} txs
             * @memberof main.XrplMonthlyTx
             * @instance
             */
            XrplMonthlyTx.prototype.txs = $util.emptyArray;
    
            /**
             * Encodes the specified XrplMonthlyTx message. Does not implicitly {@link main.XrplMonthlyTx.verify|verify} messages.
             * @function encode
             * @memberof main.XrplMonthlyTx
             * @static
             * @param {main.IXrplMonthlyTx} message XrplMonthlyTx message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            XrplMonthlyTx.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.id != null && Object.hasOwnProperty.call(message, "id"))
                    writer.uint32(/* id 1, wireType 2 =*/10).string(message.id);
                if (message.txs != null && message.txs.length)
                    for (var i = 0; i < message.txs.length; ++i)
                        $root.main.Tx.encode(message.txs[i], writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
                return writer;
            };
    
            /**
             * Encodes the specified XrplMonthlyTx message, length delimited. Does not implicitly {@link main.XrplMonthlyTx.verify|verify} messages.
             * @function encodeDelimited
             * @memberof main.XrplMonthlyTx
             * @static
             * @param {main.IXrplMonthlyTx} message XrplMonthlyTx message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            XrplMonthlyTx.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };
    
            /**
             * Decodes a XrplMonthlyTx message from the specified reader or buffer.
             * @function decode
             * @memberof main.XrplMonthlyTx
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {main.XrplMonthlyTx} XrplMonthlyTx
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            XrplMonthlyTx.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.main.XrplMonthlyTx();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1:
                        message.id = reader.string();
                        break;
                    case 2:
                        if (!(message.txs && message.txs.length))
                            message.txs = [];
                        message.txs.push($root.main.Tx.decode(reader, reader.uint32()));
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };
    
            /**
             * Decodes a XrplMonthlyTx message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof main.XrplMonthlyTx
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {main.XrplMonthlyTx} XrplMonthlyTx
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            XrplMonthlyTx.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };
    
            /**
             * Verifies a XrplMonthlyTx message.
             * @function verify
             * @memberof main.XrplMonthlyTx
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            XrplMonthlyTx.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.id != null && message.hasOwnProperty("id"))
                    if (!$util.isString(message.id))
                        return "id: string expected";
                if (message.txs != null && message.hasOwnProperty("txs")) {
                    if (!Array.isArray(message.txs))
                        return "txs: array expected";
                    for (var i = 0; i < message.txs.length; ++i) {
                        var error = $root.main.Tx.verify(message.txs[i]);
                        if (error)
                            return "txs." + error;
                    }
                }
                return null;
            };
    
            /**
             * Creates a XrplMonthlyTx message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof main.XrplMonthlyTx
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {main.XrplMonthlyTx} XrplMonthlyTx
             */
            XrplMonthlyTx.fromObject = function fromObject(object) {
                if (object instanceof $root.main.XrplMonthlyTx)
                    return object;
                var message = new $root.main.XrplMonthlyTx();
                if (object.id != null)
                    message.id = String(object.id);
                if (object.txs) {
                    if (!Array.isArray(object.txs))
                        throw TypeError(".main.XrplMonthlyTx.txs: array expected");
                    message.txs = [];
                    for (var i = 0; i < object.txs.length; ++i) {
                        if (typeof object.txs[i] !== "object")
                            throw TypeError(".main.XrplMonthlyTx.txs: object expected");
                        message.txs[i] = $root.main.Tx.fromObject(object.txs[i]);
                    }
                }
                return message;
            };
    
            /**
             * Creates a plain object from a XrplMonthlyTx message. Also converts values to other types if specified.
             * @function toObject
             * @memberof main.XrplMonthlyTx
             * @static
             * @param {main.XrplMonthlyTx} message XrplMonthlyTx
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            XrplMonthlyTx.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (options.arrays || options.defaults)
                    object.txs = [];
                if (options.defaults)
                    object.id = "";
                if (message.id != null && message.hasOwnProperty("id"))
                    object.id = message.id;
                if (message.txs && message.txs.length) {
                    object.txs = [];
                    for (var j = 0; j < message.txs.length; ++j)
                        object.txs[j] = $root.main.Tx.toObject(message.txs[j], options);
                }
                return object;
            };
    
            /**
             * Converts this XrplMonthlyTx to JSON.
             * @function toJSON
             * @memberof main.XrplMonthlyTx
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            XrplMonthlyTx.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };
    
            return XrplMonthlyTx;
        })();
    
        main.XrplTx = (function() {
    
            /**
             * Properties of a XrplTx.
             * @memberof main
             * @interface IXrplTx
             * @property {string|null} [id] XrplTx id
             * @property {Array.<main.ITx>|null} [txs] XrplTx txs
             */
    
            /**
             * Constructs a new XrplTx.
             * @memberof main
             * @classdesc Represents a XrplTx.
             * @implements IXrplTx
             * @constructor
             * @param {main.IXrplTx=} [properties] Properties to set
             */
            function XrplTx(properties) {
                this.txs = [];
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }
    
            /**
             * XrplTx id.
             * @member {string} id
             * @memberof main.XrplTx
             * @instance
             */
            XrplTx.prototype.id = "";
    
            /**
             * XrplTx txs.
             * @member {Array.<main.ITx>} txs
             * @memberof main.XrplTx
             * @instance
             */
            XrplTx.prototype.txs = $util.emptyArray;
    
            /**
             * Encodes the specified XrplTx message. Does not implicitly {@link main.XrplTx.verify|verify} messages.
             * @function encode
             * @memberof main.XrplTx
             * @static
             * @param {main.IXrplTx} message XrplTx message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            XrplTx.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.id != null && Object.hasOwnProperty.call(message, "id"))
                    writer.uint32(/* id 1, wireType 2 =*/10).string(message.id);
                if (message.txs != null && message.txs.length)
                    for (var i = 0; i < message.txs.length; ++i)
                        $root.main.Tx.encode(message.txs[i], writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
                return writer;
            };
    
            /**
             * Encodes the specified XrplTx message, length delimited. Does not implicitly {@link main.XrplTx.verify|verify} messages.
             * @function encodeDelimited
             * @memberof main.XrplTx
             * @static
             * @param {main.IXrplTx} message XrplTx message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            XrplTx.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };
    
            /**
             * Decodes a XrplTx message from the specified reader or buffer.
             * @function decode
             * @memberof main.XrplTx
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {main.XrplTx} XrplTx
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            XrplTx.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.main.XrplTx();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1:
                        message.id = reader.string();
                        break;
                    case 2:
                        if (!(message.txs && message.txs.length))
                            message.txs = [];
                        message.txs.push($root.main.Tx.decode(reader, reader.uint32()));
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };
    
            /**
             * Decodes a XrplTx message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof main.XrplTx
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {main.XrplTx} XrplTx
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            XrplTx.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };
    
            /**
             * Verifies a XrplTx message.
             * @function verify
             * @memberof main.XrplTx
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            XrplTx.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.id != null && message.hasOwnProperty("id"))
                    if (!$util.isString(message.id))
                        return "id: string expected";
                if (message.txs != null && message.hasOwnProperty("txs")) {
                    if (!Array.isArray(message.txs))
                        return "txs: array expected";
                    for (var i = 0; i < message.txs.length; ++i) {
                        var error = $root.main.Tx.verify(message.txs[i]);
                        if (error)
                            return "txs." + error;
                    }
                }
                return null;
            };
    
            /**
             * Creates a XrplTx message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof main.XrplTx
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {main.XrplTx} XrplTx
             */
            XrplTx.fromObject = function fromObject(object) {
                if (object instanceof $root.main.XrplTx)
                    return object;
                var message = new $root.main.XrplTx();
                if (object.id != null)
                    message.id = String(object.id);
                if (object.txs) {
                    if (!Array.isArray(object.txs))
                        throw TypeError(".main.XrplTx.txs: array expected");
                    message.txs = [];
                    for (var i = 0; i < object.txs.length; ++i) {
                        if (typeof object.txs[i] !== "object")
                            throw TypeError(".main.XrplTx.txs: object expected");
                        message.txs[i] = $root.main.Tx.fromObject(object.txs[i]);
                    }
                }
                return message;
            };
    
            /**
             * Creates a plain object from a XrplTx message. Also converts values to other types if specified.
             * @function toObject
             * @memberof main.XrplTx
             * @static
             * @param {main.XrplTx} message XrplTx
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            XrplTx.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (options.arrays || options.defaults)
                    object.txs = [];
                if (options.defaults)
                    object.id = "";
                if (message.id != null && message.hasOwnProperty("id"))
                    object.id = message.id;
                if (message.txs && message.txs.length) {
                    object.txs = [];
                    for (var j = 0; j < message.txs.length; ++j)
                        object.txs[j] = $root.main.Tx.toObject(message.txs[j], options);
                }
                return object;
            };
    
            /**
             * Converts this XrplTx to JSON.
             * @function toJSON
             * @memberof main.XrplTx
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            XrplTx.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };
    
            return XrplTx;
        })();
    
        main.Tx = (function() {
    
            /**
             * Properties of a Tx.
             * @memberof main
             * @interface ITx
             * @property {string|null} [from_account_id] Tx from_account_id
             * @property {string|null} [dist_account_id] Tx dist_account_id
             * @property {string|null} [amount_uupx] Tx amount_uupx
             * @property {string|null} [amount_uspx] Tx amount_uspx
             */
    
            /**
             * Constructs a new Tx.
             * @memberof main
             * @classdesc Represents a Tx.
             * @implements ITx
             * @constructor
             * @param {main.ITx=} [properties] Properties to set
             */
            function Tx(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }
    
            /**
             * Tx from_account_id.
             * @member {string} from_account_id
             * @memberof main.Tx
             * @instance
             */
            Tx.prototype.from_account_id = "";
    
            /**
             * Tx dist_account_id.
             * @member {string} dist_account_id
             * @memberof main.Tx
             * @instance
             */
            Tx.prototype.dist_account_id = "";
    
            /**
             * Tx amount_uupx.
             * @member {string} amount_uupx
             * @memberof main.Tx
             * @instance
             */
            Tx.prototype.amount_uupx = "";
    
            /**
             * Tx amount_uspx.
             * @member {string} amount_uspx
             * @memberof main.Tx
             * @instance
             */
            Tx.prototype.amount_uspx = "";
    
            /**
             * Encodes the specified Tx message. Does not implicitly {@link main.Tx.verify|verify} messages.
             * @function encode
             * @memberof main.Tx
             * @static
             * @param {main.ITx} message Tx message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            Tx.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.from_account_id != null && Object.hasOwnProperty.call(message, "from_account_id"))
                    writer.uint32(/* id 1, wireType 2 =*/10).string(message.from_account_id);
                if (message.dist_account_id != null && Object.hasOwnProperty.call(message, "dist_account_id"))
                    writer.uint32(/* id 2, wireType 2 =*/18).string(message.dist_account_id);
                if (message.amount_uupx != null && Object.hasOwnProperty.call(message, "amount_uupx"))
                    writer.uint32(/* id 3, wireType 2 =*/26).string(message.amount_uupx);
                if (message.amount_uspx != null && Object.hasOwnProperty.call(message, "amount_uspx"))
                    writer.uint32(/* id 4, wireType 2 =*/34).string(message.amount_uspx);
                return writer;
            };
    
            /**
             * Encodes the specified Tx message, length delimited. Does not implicitly {@link main.Tx.verify|verify} messages.
             * @function encodeDelimited
             * @memberof main.Tx
             * @static
             * @param {main.ITx} message Tx message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            Tx.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };
    
            /**
             * Decodes a Tx message from the specified reader or buffer.
             * @function decode
             * @memberof main.Tx
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {main.Tx} Tx
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            Tx.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.main.Tx();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1:
                        message.from_account_id = reader.string();
                        break;
                    case 2:
                        message.dist_account_id = reader.string();
                        break;
                    case 3:
                        message.amount_uupx = reader.string();
                        break;
                    case 4:
                        message.amount_uspx = reader.string();
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };
    
            /**
             * Decodes a Tx message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof main.Tx
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {main.Tx} Tx
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            Tx.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };
    
            /**
             * Verifies a Tx message.
             * @function verify
             * @memberof main.Tx
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            Tx.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.from_account_id != null && message.hasOwnProperty("from_account_id"))
                    if (!$util.isString(message.from_account_id))
                        return "from_account_id: string expected";
                if (message.dist_account_id != null && message.hasOwnProperty("dist_account_id"))
                    if (!$util.isString(message.dist_account_id))
                        return "dist_account_id: string expected";
                if (message.amount_uupx != null && message.hasOwnProperty("amount_uupx"))
                    if (!$util.isString(message.amount_uupx))
                        return "amount_uupx: string expected";
                if (message.amount_uspx != null && message.hasOwnProperty("amount_uspx"))
                    if (!$util.isString(message.amount_uspx))
                        return "amount_uspx: string expected";
                return null;
            };
    
            /**
             * Creates a Tx message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof main.Tx
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {main.Tx} Tx
             */
            Tx.fromObject = function fromObject(object) {
                if (object instanceof $root.main.Tx)
                    return object;
                var message = new $root.main.Tx();
                if (object.from_account_id != null)
                    message.from_account_id = String(object.from_account_id);
                if (object.dist_account_id != null)
                    message.dist_account_id = String(object.dist_account_id);
                if (object.amount_uupx != null)
                    message.amount_uupx = String(object.amount_uupx);
                if (object.amount_uspx != null)
                    message.amount_uspx = String(object.amount_uspx);
                return message;
            };
    
            /**
             * Creates a plain object from a Tx message. Also converts values to other types if specified.
             * @function toObject
             * @memberof main.Tx
             * @static
             * @param {main.Tx} message Tx
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            Tx.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (options.defaults) {
                    object.from_account_id = "";
                    object.dist_account_id = "";
                    object.amount_uupx = "";
                    object.amount_uspx = "";
                }
                if (message.from_account_id != null && message.hasOwnProperty("from_account_id"))
                    object.from_account_id = message.from_account_id;
                if (message.dist_account_id != null && message.hasOwnProperty("dist_account_id"))
                    object.dist_account_id = message.dist_account_id;
                if (message.amount_uupx != null && message.hasOwnProperty("amount_uupx"))
                    object.amount_uupx = message.amount_uupx;
                if (message.amount_uspx != null && message.hasOwnProperty("amount_uspx"))
                    object.amount_uspx = message.amount_uspx;
                return object;
            };
    
            /**
             * Converts this Tx to JSON.
             * @function toJSON
             * @memberof main.Tx
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            Tx.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };
    
            return Tx;
        })();
    
        return main;
    })();
    
    $root.google = (function() {
    
        /**
         * Namespace google.
         * @exports google
         * @namespace
         */
        var google = {};
    
        google.protobuf = (function() {
    
            /**
             * Namespace protobuf.
             * @memberof google
             * @namespace
             */
            var protobuf = {};
    
            protobuf.Timestamp = (function() {
    
                /**
                 * Properties of a Timestamp.
                 * @memberof google.protobuf
                 * @interface ITimestamp
                 * @property {Long|null} [seconds] Timestamp seconds
                 * @property {number|null} [nanos] Timestamp nanos
                 */
    
                /**
                 * Constructs a new Timestamp.
                 * @memberof google.protobuf
                 * @classdesc Represents a Timestamp.
                 * @implements ITimestamp
                 * @constructor
                 * @param {google.protobuf.ITimestamp=} [properties] Properties to set
                 */
                function Timestamp(properties) {
                    if (properties)
                        for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                            if (properties[keys[i]] != null)
                                this[keys[i]] = properties[keys[i]];
                }
    
                /**
                 * Timestamp seconds.
                 * @member {Long} seconds
                 * @memberof google.protobuf.Timestamp
                 * @instance
                 */
                Timestamp.prototype.seconds = $util.Long ? $util.Long.fromBits(0,0,false) : 0;
    
                /**
                 * Timestamp nanos.
                 * @member {number} nanos
                 * @memberof google.protobuf.Timestamp
                 * @instance
                 */
                Timestamp.prototype.nanos = 0;
    
                /**
                 * Encodes the specified Timestamp message. Does not implicitly {@link google.protobuf.Timestamp.verify|verify} messages.
                 * @function encode
                 * @memberof google.protobuf.Timestamp
                 * @static
                 * @param {google.protobuf.ITimestamp} message Timestamp message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                Timestamp.encode = function encode(message, writer) {
                    if (!writer)
                        writer = $Writer.create();
                    if (message.seconds != null && Object.hasOwnProperty.call(message, "seconds"))
                        writer.uint32(/* id 1, wireType 0 =*/8).int64(message.seconds);
                    if (message.nanos != null && Object.hasOwnProperty.call(message, "nanos"))
                        writer.uint32(/* id 2, wireType 0 =*/16).int32(message.nanos);
                    return writer;
                };
    
                /**
                 * Encodes the specified Timestamp message, length delimited. Does not implicitly {@link google.protobuf.Timestamp.verify|verify} messages.
                 * @function encodeDelimited
                 * @memberof google.protobuf.Timestamp
                 * @static
                 * @param {google.protobuf.ITimestamp} message Timestamp message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                Timestamp.encodeDelimited = function encodeDelimited(message, writer) {
                    return this.encode(message, writer).ldelim();
                };
    
                /**
                 * Decodes a Timestamp message from the specified reader or buffer.
                 * @function decode
                 * @memberof google.protobuf.Timestamp
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @param {number} [length] Message length if known beforehand
                 * @returns {google.protobuf.Timestamp} Timestamp
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                Timestamp.decode = function decode(reader, length) {
                    if (!(reader instanceof $Reader))
                        reader = $Reader.create(reader);
                    var end = length === undefined ? reader.len : reader.pos + length, message = new $root.google.protobuf.Timestamp();
                    while (reader.pos < end) {
                        var tag = reader.uint32();
                        switch (tag >>> 3) {
                        case 1:
                            message.seconds = reader.int64();
                            break;
                        case 2:
                            message.nanos = reader.int32();
                            break;
                        default:
                            reader.skipType(tag & 7);
                            break;
                        }
                    }
                    return message;
                };
    
                /**
                 * Decodes a Timestamp message from the specified reader or buffer, length delimited.
                 * @function decodeDelimited
                 * @memberof google.protobuf.Timestamp
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @returns {google.protobuf.Timestamp} Timestamp
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                Timestamp.decodeDelimited = function decodeDelimited(reader) {
                    if (!(reader instanceof $Reader))
                        reader = new $Reader(reader);
                    return this.decode(reader, reader.uint32());
                };
    
                /**
                 * Verifies a Timestamp message.
                 * @function verify
                 * @memberof google.protobuf.Timestamp
                 * @static
                 * @param {Object.<string,*>} message Plain object to verify
                 * @returns {string|null} `null` if valid, otherwise the reason why it is not
                 */
                Timestamp.verify = function verify(message) {
                    if (typeof message !== "object" || message === null)
                        return "object expected";
                    if (message.seconds != null && message.hasOwnProperty("seconds"))
                        if (!$util.isInteger(message.seconds) && !(message.seconds && $util.isInteger(message.seconds.low) && $util.isInteger(message.seconds.high)))
                            return "seconds: integer|Long expected";
                    if (message.nanos != null && message.hasOwnProperty("nanos"))
                        if (!$util.isInteger(message.nanos))
                            return "nanos: integer expected";
                    return null;
                };
    
                /**
                 * Creates a Timestamp message from a plain object. Also converts values to their respective internal types.
                 * @function fromObject
                 * @memberof google.protobuf.Timestamp
                 * @static
                 * @param {Object.<string,*>} object Plain object
                 * @returns {google.protobuf.Timestamp} Timestamp
                 */
                Timestamp.fromObject = function fromObject(object) {
                    if (object instanceof $root.google.protobuf.Timestamp)
                        return object;
                    var message = new $root.google.protobuf.Timestamp();
                    if (object.seconds != null)
                        if ($util.Long)
                            (message.seconds = $util.Long.fromValue(object.seconds)).unsigned = false;
                        else if (typeof object.seconds === "string")
                            message.seconds = parseInt(object.seconds, 10);
                        else if (typeof object.seconds === "number")
                            message.seconds = object.seconds;
                        else if (typeof object.seconds === "object")
                            message.seconds = new $util.LongBits(object.seconds.low >>> 0, object.seconds.high >>> 0).toNumber();
                    if (object.nanos != null)
                        message.nanos = object.nanos | 0;
                    return message;
                };
    
                /**
                 * Creates a plain object from a Timestamp message. Also converts values to other types if specified.
                 * @function toObject
                 * @memberof google.protobuf.Timestamp
                 * @static
                 * @param {google.protobuf.Timestamp} message Timestamp
                 * @param {$protobuf.IConversionOptions} [options] Conversion options
                 * @returns {Object.<string,*>} Plain object
                 */
                Timestamp.toObject = function toObject(message, options) {
                    if (!options)
                        options = {};
                    var object = {};
                    if (options.defaults) {
                        if ($util.Long) {
                            var long = new $util.Long(0, 0, false);
                            object.seconds = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                        } else
                            object.seconds = options.longs === String ? "0" : 0;
                        object.nanos = 0;
                    }
                    if (message.seconds != null && message.hasOwnProperty("seconds"))
                        if (typeof message.seconds === "number")
                            object.seconds = options.longs === String ? String(message.seconds) : message.seconds;
                        else
                            object.seconds = options.longs === String ? $util.Long.prototype.toString.call(message.seconds) : options.longs === Number ? new $util.LongBits(message.seconds.low >>> 0, message.seconds.high >>> 0).toNumber() : message.seconds;
                    if (message.nanos != null && message.hasOwnProperty("nanos"))
                        object.nanos = message.nanos;
                    return object;
                };
    
                /**
                 * Converts this Timestamp to JSON.
                 * @function toJSON
                 * @memberof google.protobuf.Timestamp
                 * @instance
                 * @returns {Object.<string,*>} JSON object
                 */
                Timestamp.prototype.toJSON = function toJSON() {
                    return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                };
    
                return Timestamp;
            })();
    
            return protobuf;
        })();
    
        return google;
    })();

    return $root;
});
