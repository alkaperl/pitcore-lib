'use strict';

var pitcore = module.exports;

// module information
pitcore.version = 'v' + require('./package.json').version;
pitcore.versionGuard = function(version) {
  if (version !== undefined) {
    var message = 'More than one instance of pitcore-lib found. ' +
      'Please make sure to require pitcore-lib and check that submodules do' +
      ' not also include their own pitcore-lib dependency.';
    throw new Error(message);
  }
};
pitcore.versionGuard(global._pitcore);
global._pitcore = pitcore.version;

// crypto
pitcore.crypto = {};
pitcore.crypto.BN = require('./lib/crypto/bn');
pitcore.crypto.ECDSA = require('./lib/crypto/ecdsa');
pitcore.crypto.Hash = require('./lib/crypto/hash');
pitcore.crypto.Random = require('./lib/crypto/random');
pitcore.crypto.Point = require('./lib/crypto/point');
pitcore.crypto.Signature = require('./lib/crypto/signature');

// encoding
pitcore.encoding = {};
pitcore.encoding.Base58 = require('./lib/encoding/base58');
pitcore.encoding.Base58Check = require('./lib/encoding/base58check');
pitcore.encoding.BufferReader = require('./lib/encoding/bufferreader');
pitcore.encoding.BufferWriter = require('./lib/encoding/bufferwriter');
pitcore.encoding.Varint = require('./lib/encoding/varint');

// utilities
pitcore.util = {};
pitcore.util.buffer = require('./lib/util/buffer');
pitcore.util.js = require('./lib/util/js');
pitcore.util.preconditions = require('./lib/util/preconditions');

// errors thrown by the library
pitcore.errors = require('./lib/errors');

// main bitcoin library
pitcore.Address = require('./lib/address');
pitcore.Block = require('./lib/block');
pitcore.MerkleBlock = require('./lib/block/merkleblock');
pitcore.BlockHeader = require('./lib/block/blockheader');
pitcore.HDPrivateKey = require('./lib/hdprivatekey.js');
pitcore.HDPublicKey = require('./lib/hdpublickey.js');
pitcore.Networks = require('./lib/networks');
pitcore.Opcode = require('./lib/opcode');
pitcore.PrivateKey = require('./lib/privatekey');
pitcore.PublicKey = require('./lib/publickey');
pitcore.Script = require('./lib/script');
pitcore.Transaction = require('./lib/transaction');
pitcore.URI = require('./lib/uri');
pitcore.Unit = require('./lib/unit');

// dependencies, subject to change
pitcore.deps = {};
pitcore.deps.bnjs = require('bn.js');
pitcore.deps.bs58 = require('bs58');
pitcore.deps.Buffer = Buffer;
pitcore.deps.elliptic = require('elliptic');
pitcore.deps.scryptsy = require('scryptsy');
pitcore.deps._ = require('lodash');

// Internal usage, exposed for testing/advanced tweaking
pitcore.Transaction.sighash = require('./lib/transaction/sighash');
