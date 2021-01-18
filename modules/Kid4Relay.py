from machine import Pin, I2C

ADDR = 0x39

machine = os.uname().machine
if "KidBright32" in machine:
    i2c1 = I2C(1, scl=Pin(5), sda=Pin(4), freq=100000)
else:
    i2c1 = I2C(0, scl=Pin(22), sda=Pin(21), freq=100000)

data = 0

def set(ch, value):
    global data
    if value:
        data |= 1 << (ch - 1)
    else:
        data &= (1 << (ch - 1)) ^ 0xFF
    i2c1.writeto(ADDR, bytes([ 1, data ]))

i2c1.writeto(ADDR, b'\x03\x00')
