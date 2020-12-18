Blockly.Python['kid4relay_set'] = function (block) {
  Blockly.Python.definitions_['import_Kid4Relay'] = 'import Kid4Relay';

  var value_ch = Blockly.Python.valueToCode(block, 'ch', Blockly.Python.ORDER_ATOMIC);
  var value_value = Blockly.Python.valueToCode(block, 'value', Blockly.Python.ORDER_ATOMIC);

  var code = `Kid4Relay.set(${value_ch}, ${value_value})\n`;
  return code;
};
