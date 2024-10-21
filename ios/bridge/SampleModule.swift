import Foundation
import React

@objc(SampleModule)
class SampleModule: NSObject {
  @objc
  static func requiresMainQueueSetup() -> Bool {
    true
  }
  @objc
  func openMethod(_ value: String, resolver: @escaping RCTResponseSenderBlock) -> Void {
    print("Module opened " + value)
  }
}

