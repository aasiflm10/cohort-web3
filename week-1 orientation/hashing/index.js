const express = require('express');
const crypto = require('crypto');

const app = express();

const input = "100xdevs";
const hash = crypto.createHash('sha256').update(input).digest('hex')

console.log(hash)
