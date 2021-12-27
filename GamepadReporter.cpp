#include "MicroBitConfig.h"

#if CONFIG_ENABLED(DEVICE_BLE)

#include "GamepadReporter.h"

// Report Map from https://stackoverflow.com/questions/41147796/hid-gamepad-report-descriptor-issue
// (Generated by descriptor tool)
static const uint8_t gamepadReportMap[] =
{
  0x05, 0x01,                   //USAGE_PAGE (Generic Desktop)
  0x09, 0x05,                   //USAGE (Game Pad)
  0xa1, 0x01,                   //COLLECTION (APPLICATION)
  0x85, 0x00,                   // Report ID OFFSET: 7
  0xa1, 0x00,                    //   COLLECTION (Physical)
  0x05, 0x09,                   //USAGE_PAGE (Button)
  0x19, 0x01,                   //USAGE_MINIMUM (Button1)
  0x29, 0x10,                   //USAGE_MAXIMUM (Button 16)
  0x15, 0x00,                   //LOGICAL_MINIMUM (0)
  0x25, 0x01,                   //LOGICAL_MAXIMUM(1)
  0x95, 0x10,                   //REPORT_COUNT (16)
  0x75, 0x01,                   //REPORT_SIZE (1)
  0x81, 0x02,                   //INPUT(Data, Var, Abs)
  0x05, 0x01,                   //USAGE_PAGE (Generic Desktop)
  0x09, 0x30,                   //USAGE (X)
  0x09, 0x31,                   //USAGE (Y)
  0x09, 0x32,                   //USAGE (Z)
  0x09, 0x33,                   //USAGE (Rx)
  0x15, 0x81,                   //LOGICAL_MINIMUM(-127)
  0x25, 0x7f,                   //LOGICAL_MAXIMUM(127)
  0x75, 0x08,                   //REPORT_SIZE(8)
  0x95, 0x04,                   //REPORT_COUNT(4)
  0x81, 0x02,                   //INPUT(Data,Var,Abs)
  0xc0,                     //END_Collection
  0xc0 
};


GamepadReporter *GamepadReporter::reporter = NULL; // Singleton reference to the service

/**
 */
GamepadReporter *GamepadReporter::getInstance()
{
    if (reporter == NULL)
    {
        reporter = new GamepadReporter();
    }
    return reporter;
}


GamepadReporter::GamepadReporter() : 
    HIDReporter("Gamepad", 6, gamepadReportMap, sizeof(gamepadReportMap), 7, 110)  // Name and report size
{
    // Done
    DEBUG("Done w/ GamepadReporter\n");
}

void GamepadReporter::send(uint16_t buttons, uint8_t x, uint8_t y, uint8_t z, uint8_t rx) {
  // Little endian
  // x/y/z/rx are absolute
  DEBUG("Sending Gamepad Report\n");
  memset(report, 0, reportSize);
  report[0] = buttons&0xff;
  report[1] = (buttons>>8)&0xff;
  report[2] = x; 
  report[3] = y; 
  report[4] = z; 
  report[5] = rx; 
  sendReport();
}

#endif 