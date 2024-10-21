#import "SampleModuleBridge.h"

@interface RCT_EXTERN_MODULE(SampleModule, NSObject)

RCT_EXTERN_METHOD(openMethod:(NSString *) value)
@end
