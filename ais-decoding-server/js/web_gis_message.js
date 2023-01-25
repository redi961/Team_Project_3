/*eslint-disable block-scoped-var, id-length, no-control-regex, no-magic-numbers, no-prototype-builtins, no-redeclare, no-shadow, no-var, sort-vars*/
"use strict";

var $protobuf = require("protobufjs/minimal");

// Common aliases
var $Reader = $protobuf.Reader,
  $Writer = $protobuf.Writer,
  $util = $protobuf.util;

// Exported root namespace
var $root = $protobuf.roots["default"] || ($protobuf.roots["default"] = {});

$root.web_gis = (function () {
  /**
   * Namespace web_gis.
   * @exports web_gis
   * @namespace
   */
  var web_gis = {};

  /**
   * MessageType enum.
   * @name web_gis.MessageType
   * @enum {number}
   * @property {number} AIS=0 AIS value
   * @property {number} LOST=1 LOST value
   * @property {number} RADAR=2 RADAR value
   */
  web_gis.MessageType = (function () {
    var valuesById = {},
      values = Object.create(valuesById);
    values[(valuesById[0] = "AIS")] = 0;
    values[(valuesById[1] = "LOST")] = 1;
    values[(valuesById[2] = "RADAR")] = 2;
    return values;
  })();

  web_gis.AIS_BASE = (function () {
    /**
     * Properties of a AIS_BASE.
     * @memberof web_gis
     * @interface IAIS_BASE
     * @property {number} mmsi AIS_BASE mmsi
     * @property {number} posX AIS_BASE posX
     * @property {number} posY AIS_BASE posY
     * @property {number} cog AIS_BASE cog
     * @property {number} sog AIS_BASE sog
     * @property {number} trueheading AIS_BASE trueheading
     * @property {string} shipName AIS_BASE shipName
     * @property {number} shipType AIS_BASE shipType
     * @property {boolean} isMerge AIS_BASE isMerge
     * @property {web_gis.AIS_BASE.TargetType} isRadar AIS_BASE isRadar
     * @property {number} leftTopX AIS_BASE leftTopX
     * @property {number} leftTopY AIS_BASE leftTopY
     * @property {number} leftBottomX AIS_BASE leftBottomX
     * @property {number} leftBottomY AIS_BASE leftBottomY
     * @property {number} rightBottomX AIS_BASE rightBottomX
     * @property {number} rightBottomY AIS_BASE rightBottomY
     * @property {number} rightTopX AIS_BASE rightTopX
     * @property {number} rightTopY AIS_BASE rightTopY
     * @property {number} centerTopX AIS_BASE centerTopX
     * @property {number} centerTopY AIS_BASE centerTopY
     */

    /**
     * Constructs a new AIS_BASE.
     * @memberof web_gis
     * @classdesc Represents a AIS_BASE.
     * @implements IAIS_BASE
     * @constructor
     * @param {web_gis.IAIS_BASE=} [properties] Properties to set
     */
    function AIS_BASE(properties) {
      if (properties)
        for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
          if (properties[keys[i]] != null) this[keys[i]] = properties[keys[i]];
    }

    /**
     * AIS_BASE mmsi.
     * @member {number} mmsi
     * @memberof web_gis.AIS_BASE
     * @instance
     */
    AIS_BASE.prototype.mmsi = 0;

    /**
     * AIS_BASE posX.
     * @member {number} posX
     * @memberof web_gis.AIS_BASE
     * @instance
     */
    AIS_BASE.prototype.posX = 0;

    /**
     * AIS_BASE posY.
     * @member {number} posY
     * @memberof web_gis.AIS_BASE
     * @instance
     */
    AIS_BASE.prototype.posY = 0;

    /**
     * AIS_BASE cog.
     * @member {number} cog
     * @memberof web_gis.AIS_BASE
     * @instance
     */
    AIS_BASE.prototype.cog = 0;

    /**
     * AIS_BASE sog.
     * @member {number} sog
     * @memberof web_gis.AIS_BASE
     * @instance
     */
    AIS_BASE.prototype.sog = 0;

    /**
     * AIS_BASE trueheading.
     * @member {number} trueheading
     * @memberof web_gis.AIS_BASE
     * @instance
     */
    AIS_BASE.prototype.trueheading = 0;

    /**
     * AIS_BASE shipName.
     * @member {string} shipName
     * @memberof web_gis.AIS_BASE
     * @instance
     */
    AIS_BASE.prototype.shipName = "";

    /**
     * AIS_BASE shipType.
     * @member {number} shipType
     * @memberof web_gis.AIS_BASE
     * @instance
     */
    AIS_BASE.prototype.shipType = 0;

    /**
     * AIS_BASE isMerge.
     * @member {boolean} isMerge
     * @memberof web_gis.AIS_BASE
     * @instance
     */
    AIS_BASE.prototype.isMerge = false;

    /**
     * AIS_BASE isRadar.
     * @member {web_gis.AIS_BASE.TargetType} isRadar
     * @memberof web_gis.AIS_BASE
     * @instance
     */
    AIS_BASE.prototype.isRadar = 0;

    /**
     * AIS_BASE leftTopX.
     * @member {number} leftTopX
     * @memberof web_gis.AIS_BASE
     * @instance
     */
    AIS_BASE.prototype.leftTopX = 0;

    /**
     * AIS_BASE leftTopY.
     * @member {number} leftTopY
     * @memberof web_gis.AIS_BASE
     * @instance
     */
    AIS_BASE.prototype.leftTopY = 0;

    /**
     * AIS_BASE leftBottomX.
     * @member {number} leftBottomX
     * @memberof web_gis.AIS_BASE
     * @instance
     */
    AIS_BASE.prototype.leftBottomX = 0;

    /**
     * AIS_BASE leftBottomY.
     * @member {number} leftBottomY
     * @memberof web_gis.AIS_BASE
     * @instance
     */
    AIS_BASE.prototype.leftBottomY = 0;

    /**
     * AIS_BASE rightBottomX.
     * @member {number} rightBottomX
     * @memberof web_gis.AIS_BASE
     * @instance
     */
    AIS_BASE.prototype.rightBottomX = 0;

    /**
     * AIS_BASE rightBottomY.
     * @member {number} rightBottomY
     * @memberof web_gis.AIS_BASE
     * @instance
     */
    AIS_BASE.prototype.rightBottomY = 0;

    /**
     * AIS_BASE rightTopX.
     * @member {number} rightTopX
     * @memberof web_gis.AIS_BASE
     * @instance
     */
    AIS_BASE.prototype.rightTopX = 0;

    /**
     * AIS_BASE rightTopY.
     * @member {number} rightTopY
     * @memberof web_gis.AIS_BASE
     * @instance
     */
    AIS_BASE.prototype.rightTopY = 0;

    /**
     * AIS_BASE centerTopX.
     * @member {number} centerTopX
     * @memberof web_gis.AIS_BASE
     * @instance
     */
    AIS_BASE.prototype.centerTopX = 0;

    /**
     * AIS_BASE centerTopY.
     * @member {number} centerTopY
     * @memberof web_gis.AIS_BASE
     * @instance
     */
    AIS_BASE.prototype.centerTopY = 0;

    /**
     * Creates a new AIS_BASE instance using the specified properties.
     * @function create
     * @memberof web_gis.AIS_BASE
     * @static
     * @param {web_gis.IAIS_BASE=} [properties] Properties to set
     * @returns {web_gis.AIS_BASE} AIS_BASE instance
     */
    AIS_BASE.create = function create(properties) {
      return new AIS_BASE(properties);
    };

    /**
     * Encodes the specified AIS_BASE message. Does not implicitly {@link web_gis.AIS_BASE.verify|verify} messages.
     * @function encode
     * @memberof web_gis.AIS_BASE
     * @static
     * @param {web_gis.IAIS_BASE} message AIS_BASE message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    AIS_BASE.encode = function encode(message, writer) {
      if (!writer) writer = $Writer.create();
      writer.uint32(/* id 1, wireType 0 =*/ 8).int32(message.mmsi);
      writer.uint32(/* id 2, wireType 0 =*/ 16).int32(message.posX);
      writer.uint32(/* id 3, wireType 0 =*/ 24).int32(message.posY);
      writer.uint32(/* id 4, wireType 5 =*/ 37).float(message.cog);
      writer.uint32(/* id 5, wireType 5 =*/ 45).float(message.sog);
      writer.uint32(/* id 6, wireType 5 =*/ 53).float(message.trueheading);
      writer.uint32(/* id 7, wireType 2 =*/ 58).string(message.shipName);
      writer.uint32(/* id 8, wireType 0 =*/ 64).int32(message.shipType);
      writer.uint32(/* id 9, wireType 0 =*/ 72).bool(message.isMerge);
      writer.uint32(/* id 10, wireType 0 =*/ 80).int32(message.isRadar);
      writer.uint32(/* id 11, wireType 0 =*/ 88).int32(message.leftTopX);
      writer.uint32(/* id 12, wireType 0 =*/ 96).int32(message.leftTopY);
      writer.uint32(/* id 13, wireType 0 =*/ 104).int32(message.leftBottomX);
      writer.uint32(/* id 14, wireType 0 =*/ 112).int32(message.leftBottomY);
      writer.uint32(/* id 15, wireType 0 =*/ 120).int32(message.rightBottomX);
      writer.uint32(/* id 16, wireType 0 =*/ 128).int32(message.rightBottomY);
      writer.uint32(/* id 17, wireType 0 =*/ 136).int32(message.rightTopX);
      writer.uint32(/* id 18, wireType 0 =*/ 144).int32(message.rightTopY);
      writer.uint32(/* id 19, wireType 0 =*/ 152).int32(message.centerTopX);
      writer.uint32(/* id 20, wireType 0 =*/ 160).int32(message.centerTopY);
      return writer;
    };

    /**
     * Encodes the specified AIS_BASE message, length delimited. Does not implicitly {@link web_gis.AIS_BASE.verify|verify} messages.
     * @function encodeDelimited
     * @memberof web_gis.AIS_BASE
     * @static
     * @param {web_gis.IAIS_BASE} message AIS_BASE message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    AIS_BASE.encodeDelimited = function encodeDelimited(message, writer) {
      return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a AIS_BASE message from the specified reader or buffer.
     * @function decode
     * @memberof web_gis.AIS_BASE
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {web_gis.AIS_BASE} AIS_BASE
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    AIS_BASE.decode = function decode(reader, length) {
      if (!(reader instanceof $Reader)) reader = $Reader.create(reader);
      var end = length === undefined ? reader.len : reader.pos + length,
        message = new $root.web_gis.AIS_BASE();
      while (reader.pos < end) {
        var tag = reader.uint32();
        switch (tag >>> 3) {
          case 1:
            message.mmsi = reader.int32();
            break;
          case 2:
            message.posX = reader.int32();
            break;
          case 3:
            message.posY = reader.int32();
            break;
          case 4:
            message.cog = reader.float();
            break;
          case 5:
            message.sog = reader.float();
            break;
          case 6:
            message.trueheading = reader.float();
            break;
          case 7:
            message.shipName = reader.string();
            break;
          case 8:
            message.shipType = reader.int32();
            break;
          case 9:
            message.isMerge = reader.bool();
            break;
          case 10:
            message.isRadar = reader.int32();
            break;
          case 11:
            message.leftTopX = reader.int32();
            break;
          case 12:
            message.leftTopY = reader.int32();
            break;
          case 13:
            message.leftBottomX = reader.int32();
            break;
          case 14:
            message.leftBottomY = reader.int32();
            break;
          case 15:
            message.rightBottomX = reader.int32();
            break;
          case 16:
            message.rightBottomY = reader.int32();
            break;
          case 17:
            message.rightTopX = reader.int32();
            break;
          case 18:
            message.rightTopY = reader.int32();
            break;
          case 19:
            message.centerTopX = reader.int32();
            break;
          case 20:
            message.centerTopY = reader.int32();
            break;
          default:
            reader.skipType(tag & 7);
            break;
        }
      }

      if (!message.hasOwnProperty("mmsi"))
        throw $util.ProtocolError("missing required 'mmsi'", {
          instance: message,
        });
      if (!message.hasOwnProperty("posX"))
        throw $util.ProtocolError("missing required 'posX'", {
          instance: message,
        });
      if (!message.hasOwnProperty("posY"))
        throw $util.ProtocolError("missing required 'posY'", {
          instance: message,
        });
      if (!message.hasOwnProperty("cog"))
        throw $util.ProtocolError("missing required 'cog'", {
          instance: message,
        });
      if (!message.hasOwnProperty("sog"))
        throw $util.ProtocolError("missing required 'sog'", {
          instance: message,
        });
      if (!message.hasOwnProperty("trueheading"))
        throw $util.ProtocolError("missing required 'trueheading'", {
          instance: message,
        });
      if (!message.hasOwnProperty("shipName"))
        throw $util.ProtocolError("missing required 'shipName'", {
          instance: message,
        });
      if (!message.hasOwnProperty("shipType"))
        throw $util.ProtocolError("missing required 'shipType'", {
          instance: message,
        });
      if (!message.hasOwnProperty("isMerge"))
        throw $util.ProtocolError("missing required 'isMerge'", {
          instance: message,
        });
      if (!message.hasOwnProperty("isRadar"))
        throw $util.ProtocolError("missing required 'isRadar'", {
          instance: message,
        });
      if (!message.hasOwnProperty("leftTopX"))
        throw $util.ProtocolError("missing required 'leftTopX'", {
          instance: message,
        });
      if (!message.hasOwnProperty("leftTopY"))
        throw $util.ProtocolError("missing required 'leftTopY'", {
          instance: message,
        });
      if (!message.hasOwnProperty("leftBottomX"))
        throw $util.ProtocolError("missing required 'leftBottomX'", {
          instance: message,
        });
      if (!message.hasOwnProperty("leftBottomY"))
        throw $util.ProtocolError("missing required 'leftBottomY'", {
          instance: message,
        });
      if (!message.hasOwnProperty("rightBottomX"))
        throw $util.ProtocolError("missing required 'rightBottomX'", {
          instance: message,
        });
      if (!message.hasOwnProperty("rightBottomY"))
        throw $util.ProtocolError("missing required 'rightBottomY'", {
          instance: message,
        });
      if (!message.hasOwnProperty("rightTopX"))
        throw $util.ProtocolError("missing required 'rightTopX'", {
          instance: message,
        });
      if (!message.hasOwnProperty("rightTopY"))
        throw $util.ProtocolError("missing required 'rightTopY'", {
          instance: message,
        });
      if (!message.hasOwnProperty("centerTopX"))
        throw $util.ProtocolError("missing required 'centerTopX'", {
          instance: message,
        });
      if (!message.hasOwnProperty("centerTopY"))
        throw $util.ProtocolError("missing required 'centerTopY'", {
          instance: message,
        });
      return message;
    };

    /**
     * Decodes a AIS_BASE message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof web_gis.AIS_BASE
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {web_gis.AIS_BASE} AIS_BASE
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    AIS_BASE.decodeDelimited = function decodeDelimited(reader) {
      if (!(reader instanceof $Reader)) reader = new $Reader(reader);
      return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a AIS_BASE message.
     * @function verify
     * @memberof web_gis.AIS_BASE
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    AIS_BASE.verify = function verify(message) {
      if (typeof message !== "object" || message === null)
        return "object expected";
      if (!$util.isInteger(message.mmsi)) return "mmsi: integer expected";
      if (!$util.isInteger(message.posX)) return "posX: integer expected";
      if (!$util.isInteger(message.posY)) return "posY: integer expected";
      if (typeof message.cog !== "number") return "cog: number expected";
      if (typeof message.sog !== "number") return "sog: number expected";
      if (typeof message.trueheading !== "number")
        return "trueheading: number expected";
      if (!$util.isString(message.shipName)) return "shipName: string expected";
      if (!$util.isInteger(message.shipType))
        return "shipType: integer expected";
      if (typeof message.isMerge !== "boolean")
        return "isMerge: boolean expected";
      switch (message.isRadar) {
        default:
          return "isRadar: enum value expected";
        case 0:
        case 1:
          break;
      }
      if (!$util.isInteger(message.leftTopX))
        return "leftTopX: integer expected";
      if (!$util.isInteger(message.leftTopY))
        return "leftTopY: integer expected";
      if (!$util.isInteger(message.leftBottomX))
        return "leftBottomX: integer expected";
      if (!$util.isInteger(message.leftBottomY))
        return "leftBottomY: integer expected";
      if (!$util.isInteger(message.rightBottomX))
        return "rightBottomX: integer expected";
      if (!$util.isInteger(message.rightBottomY))
        return "rightBottomY: integer expected";
      if (!$util.isInteger(message.rightTopX))
        return "rightTopX: integer expected";
      if (!$util.isInteger(message.rightTopY))
        return "rightTopY: integer expected";
      if (!$util.isInteger(message.centerTopX))
        return "centerTopX: integer expected";
      if (!$util.isInteger(message.centerTopY))
        return "centerTopY: integer expected";
      return null;
    };

    /**
     * Creates a AIS_BASE message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof web_gis.AIS_BASE
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {web_gis.AIS_BASE} AIS_BASE
     */
    AIS_BASE.fromObject = function fromObject(object) {
      if (object instanceof $root.web_gis.AIS_BASE) return object;
      var message = new $root.web_gis.AIS_BASE();
      if (object.mmsi != null) message.mmsi = object.mmsi | 0;
      if (object.posX != null) message.posX = object.posX | 0;
      if (object.posY != null) message.posY = object.posY | 0;
      if (object.cog != null) message.cog = Number(object.cog);
      if (object.sog != null) message.sog = Number(object.sog);
      if (object.trueheading != null)
        message.trueheading = Number(object.trueheading);
      if (object.shipName != null) message.shipName = String(object.shipName);
      if (object.shipType != null) message.shipType = object.shipType | 0;
      if (object.isMerge != null) message.isMerge = Boolean(object.isMerge);
      switch (object.isRadar) {
        case "NORMAL":
        case 0:
          message.isRadar = 0;
          break;
        case "RADAR":
        case 1:
          message.isRadar = 1;
          break;
      }
      if (object.leftTopX != null) message.leftTopX = object.leftTopX | 0;
      if (object.leftTopY != null) message.leftTopY = object.leftTopY | 0;
      if (object.leftBottomX != null)
        message.leftBottomX = object.leftBottomX | 0;
      if (object.leftBottomY != null)
        message.leftBottomY = object.leftBottomY | 0;
      if (object.rightBottomX != null)
        message.rightBottomX = object.rightBottomX | 0;
      if (object.rightBottomY != null)
        message.rightBottomY = object.rightBottomY | 0;
      if (object.rightTopX != null) message.rightTopX = object.rightTopX | 0;
      if (object.rightTopY != null) message.rightTopY = object.rightTopY | 0;
      if (object.centerTopX != null) message.centerTopX = object.centerTopX | 0;
      if (object.centerTopY != null) message.centerTopY = object.centerTopY | 0;
      return message;
    };

    /**
     * Creates a plain object from a AIS_BASE message. Also converts values to other types if specified.
     * @function toObject
     * @memberof web_gis.AIS_BASE
     * @static
     * @param {web_gis.AIS_BASE} message AIS_BASE
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    AIS_BASE.toObject = function toObject(message, options) {
      if (!options) options = {};
      var object = {};
      if (options.defaults) {
        object.mmsi = 0;
        object.posX = 0;
        object.posY = 0;
        object.cog = 0;
        object.sog = 0;
        object.trueheading = 0;
        object.shipName = "";
        object.shipType = 0;
        object.isMerge = false;
        object.isRadar = options.enums === String ? "NORMAL" : 0;
        object.leftTopX = 0;
        object.leftTopY = 0;
        object.leftBottomX = 0;
        object.leftBottomY = 0;
        object.rightBottomX = 0;
        object.rightBottomY = 0;
        object.rightTopX = 0;
        object.rightTopY = 0;
        object.centerTopX = 0;
        object.centerTopY = 0;
      }
      if (message.mmsi != null && message.hasOwnProperty("mmsi"))
        object.mmsi = message.mmsi;
      if (message.posX != null && message.hasOwnProperty("posX"))
        object.posX = message.posX;
      if (message.posY != null && message.hasOwnProperty("posY"))
        object.posY = message.posY;
      if (message.cog != null && message.hasOwnProperty("cog"))
        object.cog =
          options.json && !isFinite(message.cog)
            ? String(message.cog)
            : message.cog;
      if (message.sog != null && message.hasOwnProperty("sog"))
        object.sog =
          options.json && !isFinite(message.sog)
            ? String(message.sog)
            : message.sog;
      if (message.trueheading != null && message.hasOwnProperty("trueheading"))
        object.trueheading =
          options.json && !isFinite(message.trueheading)
            ? String(message.trueheading)
            : message.trueheading;
      if (message.shipName != null && message.hasOwnProperty("shipName"))
        object.shipName = message.shipName;
      if (message.shipType != null && message.hasOwnProperty("shipType"))
        object.shipType = message.shipType;
      if (message.isMerge != null && message.hasOwnProperty("isMerge"))
        object.isMerge = message.isMerge;
      if (message.isRadar != null && message.hasOwnProperty("isRadar"))
        object.isRadar =
          options.enums === String
            ? $root.web_gis.AIS_BASE.TargetType[message.isRadar]
            : message.isRadar;
      if (message.leftTopX != null && message.hasOwnProperty("leftTopX"))
        object.leftTopX = message.leftTopX;
      if (message.leftTopY != null && message.hasOwnProperty("leftTopY"))
        object.leftTopY = message.leftTopY;
      if (message.leftBottomX != null && message.hasOwnProperty("leftBottomX"))
        object.leftBottomX = message.leftBottomX;
      if (message.leftBottomY != null && message.hasOwnProperty("leftBottomY"))
        object.leftBottomY = message.leftBottomY;
      if (
        message.rightBottomX != null &&
        message.hasOwnProperty("rightBottomX")
      )
        object.rightBottomX = message.rightBottomX;
      if (
        message.rightBottomY != null &&
        message.hasOwnProperty("rightBottomY")
      )
        object.rightBottomY = message.rightBottomY;
      if (message.rightTopX != null && message.hasOwnProperty("rightTopX"))
        object.rightTopX = message.rightTopX;
      if (message.rightTopY != null && message.hasOwnProperty("rightTopY"))
        object.rightTopY = message.rightTopY;
      if (message.centerTopX != null && message.hasOwnProperty("centerTopX"))
        object.centerTopX = message.centerTopX;
      if (message.centerTopY != null && message.hasOwnProperty("centerTopY"))
        object.centerTopY = message.centerTopY;
      return object;
    };

    /**
     * Converts this AIS_BASE to JSON.
     * @function toJSON
     * @memberof web_gis.AIS_BASE
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    AIS_BASE.prototype.toJSON = function toJSON() {
      return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    /**
     * TargetType enum.
     * @name web_gis.AIS_BASE.TargetType
     * @enum {number}
     * @property {number} NORMAL=0 NORMAL value
     * @property {number} RADAR=1 RADAR value
     */
    AIS_BASE.TargetType = (function () {
      var valuesById = {},
        values = Object.create(valuesById);
      values[(valuesById[0] = "NORMAL")] = 0;
      values[(valuesById[1] = "RADAR")] = 1;
      return values;
    })();

    return AIS_BASE;
  })();

  web_gis.LOST_SIGNAL = (function () {
    /**
     * Properties of a LOST_SIGNAL.
     * @memberof web_gis
     * @interface ILOST_SIGNAL
     * @property {number} mmsi LOST_SIGNAL mmsi
     */

    /**
     * Constructs a new LOST_SIGNAL.
     * @memberof web_gis
     * @classdesc Represents a LOST_SIGNAL.
     * @implements ILOST_SIGNAL
     * @constructor
     * @param {web_gis.ILOST_SIGNAL=} [properties] Properties to set
     */
    function LOST_SIGNAL(properties) {
      if (properties)
        for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
          if (properties[keys[i]] != null) this[keys[i]] = properties[keys[i]];
    }

    /**
     * LOST_SIGNAL mmsi.
     * @member {number} mmsi
     * @memberof web_gis.LOST_SIGNAL
     * @instance
     */
    LOST_SIGNAL.prototype.mmsi = 0;

    /**
     * Creates a new LOST_SIGNAL instance using the specified properties.
     * @function create
     * @memberof web_gis.LOST_SIGNAL
     * @static
     * @param {web_gis.ILOST_SIGNAL=} [properties] Properties to set
     * @returns {web_gis.LOST_SIGNAL} LOST_SIGNAL instance
     */
    LOST_SIGNAL.create = function create(properties) {
      return new LOST_SIGNAL(properties);
    };

    /**
     * Encodes the specified LOST_SIGNAL message. Does not implicitly {@link web_gis.LOST_SIGNAL.verify|verify} messages.
     * @function encode
     * @memberof web_gis.LOST_SIGNAL
     * @static
     * @param {web_gis.ILOST_SIGNAL} message LOST_SIGNAL message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    LOST_SIGNAL.encode = function encode(message, writer) {
      if (!writer) writer = $Writer.create();
      writer.uint32(/* id 1, wireType 0 =*/ 8).int32(message.mmsi);
      return writer;
    };

    /**
     * Encodes the specified LOST_SIGNAL message, length delimited. Does not implicitly {@link web_gis.LOST_SIGNAL.verify|verify} messages.
     * @function encodeDelimited
     * @memberof web_gis.LOST_SIGNAL
     * @static
     * @param {web_gis.ILOST_SIGNAL} message LOST_SIGNAL message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    LOST_SIGNAL.encodeDelimited = function encodeDelimited(message, writer) {
      return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a LOST_SIGNAL message from the specified reader or buffer.
     * @function decode
     * @memberof web_gis.LOST_SIGNAL
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {web_gis.LOST_SIGNAL} LOST_SIGNAL
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    LOST_SIGNAL.decode = function decode(reader, length) {
      if (!(reader instanceof $Reader)) reader = $Reader.create(reader);
      var end = length === undefined ? reader.len : reader.pos + length,
        message = new $root.web_gis.LOST_SIGNAL();
      while (reader.pos < end) {
        var tag = reader.uint32();
        switch (tag >>> 3) {
          case 1:
            message.mmsi = reader.int32();
            break;
          default:
            reader.skipType(tag & 7);
            break;
        }
      }
      if (!message.hasOwnProperty("mmsi"))
        throw $util.ProtocolError("missing required 'mmsi'", {
          instance: message,
        });
      return message;
    };

    /**
     * Decodes a LOST_SIGNAL message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof web_gis.LOST_SIGNAL
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {web_gis.LOST_SIGNAL} LOST_SIGNAL
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    LOST_SIGNAL.decodeDelimited = function decodeDelimited(reader) {
      if (!(reader instanceof $Reader)) reader = new $Reader(reader);
      return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a LOST_SIGNAL message.
     * @function verify
     * @memberof web_gis.LOST_SIGNAL
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    LOST_SIGNAL.verify = function verify(message) {
      if (typeof message !== "object" || message === null)
        return "object expected";
      if (!$util.isInteger(message.mmsi)) return "mmsi: integer expected";
      return null;
    };

    /**
     * Creates a LOST_SIGNAL message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof web_gis.LOST_SIGNAL
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {web_gis.LOST_SIGNAL} LOST_SIGNAL
     */
    LOST_SIGNAL.fromObject = function fromObject(object) {
      if (object instanceof $root.web_gis.LOST_SIGNAL) return object;
      var message = new $root.web_gis.LOST_SIGNAL();
      if (object.mmsi != null) message.mmsi = object.mmsi | 0;
      return message;
    };

    /**
     * Creates a plain object from a LOST_SIGNAL message. Also converts values to other types if specified.
     * @function toObject
     * @memberof web_gis.LOST_SIGNAL
     * @static
     * @param {web_gis.LOST_SIGNAL} message LOST_SIGNAL
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    LOST_SIGNAL.toObject = function toObject(message, options) {
      if (!options) options = {};
      var object = {};
      if (options.defaults) object.mmsi = 0;
      if (message.mmsi != null && message.hasOwnProperty("mmsi"))
        object.mmsi = message.mmsi;
      return object;
    };

    /**
     * Converts this LOST_SIGNAL to JSON.
     * @function toJSON
     * @memberof web_gis.LOST_SIGNAL
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    LOST_SIGNAL.prototype.toJSON = function toJSON() {
      return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    return LOST_SIGNAL;
  })();

  web_gis.RADAR_IMAGE = (function () {
    /**
     * Properties of a RADAR_IMAGE.
     * @memberof web_gis
     * @interface IRADAR_IMAGE
     * @property {number} siteId RADAR_IMAGE siteId
     * @property {Array.<web_gis.RADAR_IMAGE.IPosition>|null} [fragment] RADAR_IMAGE fragment
     */

    /**
     * Constructs a new RADAR_IMAGE.
     * @memberof web_gis
     * @classdesc Represents a RADAR_IMAGE.
     * @implements IRADAR_IMAGE
     * @constructor
     * @param {web_gis.IRADAR_IMAGE=} [properties] Properties to set
     */
    function RADAR_IMAGE(properties) {
      this.fragment = [];
      if (properties)
        for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
          if (properties[keys[i]] != null) this[keys[i]] = properties[keys[i]];
    }

    /**
     * RADAR_IMAGE siteId.
     * @member {number} siteId
     * @memberof web_gis.RADAR_IMAGE
     * @instance
     */
    RADAR_IMAGE.prototype.siteId = 0;

    /**
     * RADAR_IMAGE fragment.
     * @member {Array.<web_gis.RADAR_IMAGE.IPosition>} fragment
     * @memberof web_gis.RADAR_IMAGE
     * @instance
     */
    RADAR_IMAGE.prototype.fragment = $util.emptyArray;

    /**
     * Creates a new RADAR_IMAGE instance using the specified properties.
     * @function create
     * @memberof web_gis.RADAR_IMAGE
     * @static
     * @param {web_gis.IRADAR_IMAGE=} [properties] Properties to set
     * @returns {web_gis.RADAR_IMAGE} RADAR_IMAGE instance
     */
    RADAR_IMAGE.create = function create(properties) {
      return new RADAR_IMAGE(properties);
    };

    /**
     * Encodes the specified RADAR_IMAGE message. Does not implicitly {@link web_gis.RADAR_IMAGE.verify|verify} messages.
     * @function encode
     * @memberof web_gis.RADAR_IMAGE
     * @static
     * @param {web_gis.IRADAR_IMAGE} message RADAR_IMAGE message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    RADAR_IMAGE.encode = function encode(message, writer) {
      if (!writer) writer = $Writer.create();
      writer.uint32(/* id 1, wireType 0 =*/ 8).int32(message.siteId);
      if (message.fragment != null && message.fragment.length)
        for (var i = 0; i < message.fragment.length; ++i)
          $root.web_gis.RADAR_IMAGE.Position.encode(
            message.fragment[i],
            writer.uint32(/* id 2, wireType 2 =*/ 18).fork()
          ).ldelim();
      return writer;
    };

    /**
     * Encodes the specified RADAR_IMAGE message, length delimited. Does not implicitly {@link web_gis.RADAR_IMAGE.verify|verify} messages.
     * @function encodeDelimited
     * @memberof web_gis.RADAR_IMAGE
     * @static
     * @param {web_gis.IRADAR_IMAGE} message RADAR_IMAGE message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    RADAR_IMAGE.encodeDelimited = function encodeDelimited(message, writer) {
      return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a RADAR_IMAGE message from the specified reader or buffer.
     * @function decode
     * @memberof web_gis.RADAR_IMAGE
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {web_gis.RADAR_IMAGE} RADAR_IMAGE
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    RADAR_IMAGE.decode = function decode(reader, length) {
      if (!(reader instanceof $Reader)) reader = $Reader.create(reader);
      var end = length === undefined ? reader.len : reader.pos + length,
        message = new $root.web_gis.RADAR_IMAGE();
      while (reader.pos < end) {
        var tag = reader.uint32();
        switch (tag >>> 3) {
          case 1:
            message.siteId = reader.int32();
            break;
          case 2:
            if (!(message.fragment && message.fragment.length))
              message.fragment = [];
            message.fragment.push(
              $root.web_gis.RADAR_IMAGE.Position.decode(reader, reader.uint32())
            );
            break;
          default:
            reader.skipType(tag & 7);
            break;
        }
      }
      if (!message.hasOwnProperty("siteId"))
        throw $util.ProtocolError("missing required 'siteId'", {
          instance: message,
        });
      return message;
    };

    /**
     * Decodes a RADAR_IMAGE message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof web_gis.RADAR_IMAGE
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {web_gis.RADAR_IMAGE} RADAR_IMAGE
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    RADAR_IMAGE.decodeDelimited = function decodeDelimited(reader) {
      if (!(reader instanceof $Reader)) reader = new $Reader(reader);
      return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a RADAR_IMAGE message.
     * @function verify
     * @memberof web_gis.RADAR_IMAGE
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    RADAR_IMAGE.verify = function verify(message) {
      if (typeof message !== "object" || message === null)
        return "object expected";
      if (!$util.isInteger(message.siteId)) return "siteId: integer expected";
      if (message.fragment != null && message.hasOwnProperty("fragment")) {
        if (!Array.isArray(message.fragment)) return "fragment: array expected";
        for (var i = 0; i < message.fragment.length; ++i) {
          var error = $root.web_gis.RADAR_IMAGE.Position.verify(
            message.fragment[i]
          );
          if (error) return "fragment." + error;
        }
      }
      return null;
    };

    /**
     * Creates a RADAR_IMAGE message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof web_gis.RADAR_IMAGE
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {web_gis.RADAR_IMAGE} RADAR_IMAGE
     */
    RADAR_IMAGE.fromObject = function fromObject(object) {
      if (object instanceof $root.web_gis.RADAR_IMAGE) return object;
      var message = new $root.web_gis.RADAR_IMAGE();
      if (object.siteId != null) message.siteId = object.siteId | 0;
      if (object.fragment) {
        if (!Array.isArray(object.fragment))
          throw TypeError(".web_gis.RADAR_IMAGE.fragment: array expected");
        message.fragment = [];
        for (var i = 0; i < object.fragment.length; ++i) {
          if (typeof object.fragment[i] !== "object")
            throw TypeError(".web_gis.RADAR_IMAGE.fragment: object expected");
          message.fragment[i] = $root.web_gis.RADAR_IMAGE.Position.fromObject(
            object.fragment[i]
          );
        }
      }
      return message;
    };

    /**
     * Creates a plain object from a RADAR_IMAGE message. Also converts values to other types if specified.
     * @function toObject
     * @memberof web_gis.RADAR_IMAGE
     * @static
     * @param {web_gis.RADAR_IMAGE} message RADAR_IMAGE
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    RADAR_IMAGE.toObject = function toObject(message, options) {
      if (!options) options = {};
      var object = {};
      if (options.arrays || options.defaults) object.fragment = [];
      if (options.defaults) object.siteId = 0;
      if (message.siteId != null && message.hasOwnProperty("siteId"))
        object.siteId = message.siteId;
      if (message.fragment && message.fragment.length) {
        object.fragment = [];
        for (var j = 0; j < message.fragment.length; ++j)
          object.fragment[j] = $root.web_gis.RADAR_IMAGE.Position.toObject(
            message.fragment[j],
            options
          );
      }
      return object;
    };

    /**
     * Converts this RADAR_IMAGE to JSON.
     * @function toJSON
     * @memberof web_gis.RADAR_IMAGE
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    RADAR_IMAGE.prototype.toJSON = function toJSON() {
      return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    RADAR_IMAGE.Position = (function () {
      /**
       * Properties of a Position.
       * @memberof web_gis.RADAR_IMAGE
       * @interface IPosition
       * @property {number} amplitude Position amplitude
       * @property {number} x1 Position x1
       * @property {number} y1 Position y1
       * @property {number} x2 Position x2
       * @property {number} y2 Position y2
       * @property {number} x3 Position x3
       * @property {number} y3 Position y3
       * @property {number} x4 Position x4
       * @property {number} y4 Position y4
       */

      /**
       * Constructs a new Position.
       * @memberof web_gis.RADAR_IMAGE
       * @classdesc Represents a Position.
       * @implements IPosition
       * @constructor
       * @param {web_gis.RADAR_IMAGE.IPosition=} [properties] Properties to set
       */
      function Position(properties) {
        if (properties)
          for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
            if (properties[keys[i]] != null)
              this[keys[i]] = properties[keys[i]];
      }

      /**
       * Position amplitude.
       * @member {number} amplitude
       * @memberof web_gis.RADAR_IMAGE.Position
       * @instance
       */
      Position.prototype.amplitude = 0;

      /**
       * Position x1.
       * @member {number} x1
       * @memberof web_gis.RADAR_IMAGE.Position
       * @instance
       */
      Position.prototype.x1 = 0;

      /**
       * Position y1.
       * @member {number} y1
       * @memberof web_gis.RADAR_IMAGE.Position
       * @instance
       */
      Position.prototype.y1 = 0;

      /**
       * Position x2.
       * @member {number} x2
       * @memberof web_gis.RADAR_IMAGE.Position
       * @instance
       */
      Position.prototype.x2 = 0;

      /**
       * Position y2.
       * @member {number} y2
       * @memberof web_gis.RADAR_IMAGE.Position
       * @instance
       */
      Position.prototype.y2 = 0;

      /**
       * Position x3.
       * @member {number} x3
       * @memberof web_gis.RADAR_IMAGE.Position
       * @instance
       */
      Position.prototype.x3 = 0;

      /**
       * Position y3.
       * @member {number} y3
       * @memberof web_gis.RADAR_IMAGE.Position
       * @instance
       */
      Position.prototype.y3 = 0;

      /**
       * Position x4.
       * @member {number} x4
       * @memberof web_gis.RADAR_IMAGE.Position
       * @instance
       */
      Position.prototype.x4 = 0;

      /**
       * Position y4.
       * @member {number} y4
       * @memberof web_gis.RADAR_IMAGE.Position
       * @instance
       */
      Position.prototype.y4 = 0;

      /**
       * Creates a new Position instance using the specified properties.
       * @function create
       * @memberof web_gis.RADAR_IMAGE.Position
       * @static
       * @param {web_gis.RADAR_IMAGE.IPosition=} [properties] Properties to set
       * @returns {web_gis.RADAR_IMAGE.Position} Position instance
       */
      Position.create = function create(properties) {
        return new Position(properties);
      };

      /**
       * Encodes the specified Position message. Does not implicitly {@link web_gis.RADAR_IMAGE.Position.verify|verify} messages.
       * @function encode
       * @memberof web_gis.RADAR_IMAGE.Position
       * @static
       * @param {web_gis.RADAR_IMAGE.IPosition} message Position message or plain object to encode
       * @param {$protobuf.Writer} [writer] Writer to encode to
       * @returns {$protobuf.Writer} Writer
       */
      Position.encode = function encode(message, writer) {
        if (!writer) writer = $Writer.create();
        writer.uint32(/* id 1, wireType 0 =*/ 8).int32(message.amplitude);
        writer.uint32(/* id 2, wireType 0 =*/ 16).int32(message.x1);
        writer.uint32(/* id 3, wireType 0 =*/ 24).int32(message.y1);
        writer.uint32(/* id 4, wireType 0 =*/ 32).int32(message.x2);
        writer.uint32(/* id 5, wireType 0 =*/ 40).int32(message.y2);
        writer.uint32(/* id 6, wireType 0 =*/ 48).int32(message.x3);
        writer.uint32(/* id 7, wireType 0 =*/ 56).int32(message.y3);
        writer.uint32(/* id 8, wireType 0 =*/ 64).int32(message.x4);
        writer.uint32(/* id 9, wireType 0 =*/ 72).int32(message.y4);
        return writer;
      };

      /**
       * Encodes the specified Position message, length delimited. Does not implicitly {@link web_gis.RADAR_IMAGE.Position.verify|verify} messages.
       * @function encodeDelimited
       * @memberof web_gis.RADAR_IMAGE.Position
       * @static
       * @param {web_gis.RADAR_IMAGE.IPosition} message Position message or plain object to encode
       * @param {$protobuf.Writer} [writer] Writer to encode to
       * @returns {$protobuf.Writer} Writer
       */
      Position.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
      };

      /**
       * Decodes a Position message from the specified reader or buffer.
       * @function decode
       * @memberof web_gis.RADAR_IMAGE.Position
       * @static
       * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
       * @param {number} [length] Message length if known beforehand
       * @returns {web_gis.RADAR_IMAGE.Position} Position
       * @throws {Error} If the payload is not a reader or valid buffer
       * @throws {$protobuf.util.ProtocolError} If required fields are missing
       */
      Position.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader)) reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length,
          message = new $root.web_gis.RADAR_IMAGE.Position();
        while (reader.pos < end) {
          var tag = reader.uint32();
          switch (tag >>> 3) {
            case 1:
              message.amplitude = reader.int32();
              break;
            case 2:
              message.x1 = reader.int32();
              break;
            case 3:
              message.y1 = reader.int32();
              break;
            case 4:
              message.x2 = reader.int32();
              break;
            case 5:
              message.y2 = reader.int32();
              break;
            case 6:
              message.x3 = reader.int32();
              break;
            case 7:
              message.y3 = reader.int32();
              break;
            case 8:
              message.x4 = reader.int32();
              break;
            case 9:
              message.y4 = reader.int32();
              break;
            default:
              reader.skipType(tag & 7);
              break;
          }
        }
        if (!message.hasOwnProperty("amplitude"))
          throw $util.ProtocolError("missing required 'amplitude'", {
            instance: message,
          });
        if (!message.hasOwnProperty("x1"))
          throw $util.ProtocolError("missing required 'x1'", {
            instance: message,
          });
        if (!message.hasOwnProperty("y1"))
          throw $util.ProtocolError("missing required 'y1'", {
            instance: message,
          });
        if (!message.hasOwnProperty("x2"))
          throw $util.ProtocolError("missing required 'x2'", {
            instance: message,
          });
        if (!message.hasOwnProperty("y2"))
          throw $util.ProtocolError("missing required 'y2'", {
            instance: message,
          });
        if (!message.hasOwnProperty("x3"))
          throw $util.ProtocolError("missing required 'x3'", {
            instance: message,
          });
        if (!message.hasOwnProperty("y3"))
          throw $util.ProtocolError("missing required 'y3'", {
            instance: message,
          });
        if (!message.hasOwnProperty("x4"))
          throw $util.ProtocolError("missing required 'x4'", {
            instance: message,
          });
        if (!message.hasOwnProperty("y4"))
          throw $util.ProtocolError("missing required 'y4'", {
            instance: message,
          });
        return message;
      };

      /**
       * Decodes a Position message from the specified reader or buffer, length delimited.
       * @function decodeDelimited
       * @memberof web_gis.RADAR_IMAGE.Position
       * @static
       * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
       * @returns {web_gis.RADAR_IMAGE.Position} Position
       * @throws {Error} If the payload is not a reader or valid buffer
       * @throws {$protobuf.util.ProtocolError} If required fields are missing
       */
      Position.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader)) reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
      };

      /**
       * Verifies a Position message.
       * @function verify
       * @memberof web_gis.RADAR_IMAGE.Position
       * @static
       * @param {Object.<string,*>} message Plain object to verify
       * @returns {string|null} `null` if valid, otherwise the reason why it is not
       */
      Position.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
          return "object expected";
        if (!$util.isInteger(message.amplitude))
          return "amplitude: integer expected";
        if (!$util.isInteger(message.x1)) return "x1: integer expected";
        if (!$util.isInteger(message.y1)) return "y1: integer expected";
        if (!$util.isInteger(message.x2)) return "x2: integer expected";
        if (!$util.isInteger(message.y2)) return "y2: integer expected";
        if (!$util.isInteger(message.x3)) return "x3: integer expected";
        if (!$util.isInteger(message.y3)) return "y3: integer expected";
        if (!$util.isInteger(message.x4)) return "x4: integer expected";
        if (!$util.isInteger(message.y4)) return "y4: integer expected";
        return null;
      };

      /**
       * Creates a Position message from a plain object. Also converts values to their respective internal types.
       * @function fromObject
       * @memberof web_gis.RADAR_IMAGE.Position
       * @static
       * @param {Object.<string,*>} object Plain object
       * @returns {web_gis.RADAR_IMAGE.Position} Position
       */
      Position.fromObject = function fromObject(object) {
        if (object instanceof $root.web_gis.RADAR_IMAGE.Position) return object;
        var message = new $root.web_gis.RADAR_IMAGE.Position();
        if (object.amplitude != null) message.amplitude = object.amplitude | 0;
        if (object.x1 != null) message.x1 = object.x1 | 0;
        if (object.y1 != null) message.y1 = object.y1 | 0;
        if (object.x2 != null) message.x2 = object.x2 | 0;
        if (object.y2 != null) message.y2 = object.y2 | 0;
        if (object.x3 != null) message.x3 = object.x3 | 0;
        if (object.y3 != null) message.y3 = object.y3 | 0;
        if (object.x4 != null) message.x4 = object.x4 | 0;
        if (object.y4 != null) message.y4 = object.y4 | 0;
        return message;
      };

      /**
       * Creates a plain object from a Position message. Also converts values to other types if specified.
       * @function toObject
       * @memberof web_gis.RADAR_IMAGE.Position
       * @static
       * @param {web_gis.RADAR_IMAGE.Position} message Position
       * @param {$protobuf.IConversionOptions} [options] Conversion options
       * @returns {Object.<string,*>} Plain object
       */
      Position.toObject = function toObject(message, options) {
        if (!options) options = {};
        var object = {};
        if (options.defaults) {
          object.amplitude = 0;
          object.x1 = 0;
          object.y1 = 0;
          object.x2 = 0;
          object.y2 = 0;
          object.x3 = 0;
          object.y3 = 0;
          object.x4 = 0;
          object.y4 = 0;
        }
        if (message.amplitude != null && message.hasOwnProperty("amplitude"))
          object.amplitude = message.amplitude;
        if (message.x1 != null && message.hasOwnProperty("x1"))
          object.x1 = message.x1;
        if (message.y1 != null && message.hasOwnProperty("y1"))
          object.y1 = message.y1;
        if (message.x2 != null && message.hasOwnProperty("x2"))
          object.x2 = message.x2;
        if (message.y2 != null && message.hasOwnProperty("y2"))
          object.y2 = message.y2;
        if (message.x3 != null && message.hasOwnProperty("x3"))
          object.x3 = message.x3;
        if (message.y3 != null && message.hasOwnProperty("y3"))
          object.y3 = message.y3;
        if (message.x4 != null && message.hasOwnProperty("x4"))
          object.x4 = message.x4;
        if (message.y4 != null && message.hasOwnProperty("y4"))
          object.y4 = message.y4;
        return object;
      };

      /**
       * Converts this Position to JSON.
       * @function toJSON
       * @memberof web_gis.RADAR_IMAGE.Position
       * @instance
       * @returns {Object.<string,*>} JSON object
       */
      Position.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
      };

      return Position;
    })();

    return RADAR_IMAGE;
  })();

  return web_gis;
})();

module.exports = $root;
