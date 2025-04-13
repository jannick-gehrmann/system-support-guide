import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Check, XCircle } from "lucide-react";

const diagnosticItems = [
  {
    key: "os",
    title: "Operating System",
    ideal: "Windows 10 or 11 (64-bit)",
    description: "Describes the detected OS version. Systems must be compatible with most modern anti-cheat software.",
    fix: "Update your OS through Windows Update to ensure compatibility with security and anti-cheat systems."
  },
  {
    key: "anticheat",
    title: "Anti-Cheat Services",
    ideal: "Running",
    description: "Looks for known anti-cheat services (e.g. Vanguard, EAC, BattlEye). These are essential for multiplayer games.",
    fix: "Install or repair the game that uses the missing anti-cheat. Sometimes a system reboot may be required."
  },
  {
    key: "acdrivers",
    title: "Anti-Cheat Drivers",
    ideal: "Present",
    description: "Detects low-level drivers used by anti-cheat engines for tamper protection.",
    fix: "Reinstall the game or the anti-cheat engine (e.g., Vanguard, EAC). Make sure the driver is not blocked by antivirus."
  },
  {
    key: "defender",
    title: "Windows Defender",
    ideal: "Disabled (when using modding/cheat tools)",
    description: "Verifies whether Windows Defender is active, which may interfere with custom tools or mods.",
    fix: "Temporarily disable real-time protection in Windows Security settings while using compatible tools."
  },
  {
    key: "vcruntime",
    title: "VC++ Runtimes",
    ideal: "Installed",
    description: "Checks if the Visual C++ Redistributable packages are installed. Required by many Windows applications.",
    fix: "Download and install the latest Visual C++ Redistributables from Microsoft's website."
  },
  {
    key: "secureboot",
    title: "Secure Boot",
    ideal: "Disabled (for advanced tools)",
    description: "Checks if UEFI Secure Boot is enabled. This can prevent loading of unsigned drivers."
    ,
    fix: "Enter your BIOS settings and disable Secure Boot under the Security tab."
  },
  {
    key: "testmode",
    title: "Test Mode",
    ideal: "Enabled",
    description: "Checks if Windows is in Test Mode, which allows unsigned driver loading — useful for debugging or advanced tools.",
    fix: "Open Command Prompt as Administrator and run: bcdedit /set testsigning on, then reboot."
  },
  {
    key: "hvci",
    title: "Memory Integrity (HVCI)",
    ideal: "Disabled (for compatibility)",
    description: "Checks whether Hypervisor-Protected Code Integrity is active, which blocks low-level driver access.",
    fix: "Go to Windows Security > Device Security > Core Isolation and turn off Memory Integrity."
  },
  {
    key: "virtualization",
    title: "Virtualization",
    ideal: "Enabled",
    description: "Indicates whether hardware virtualization support is enabled in firmware. Required for certain sandboxed tools."
    ,
    fix: "Enable Intel VT-x / AMD-V in BIOS under CPU Configuration."
  },
  {
    key: "tpm",
    title: "TPM (Trusted Platform Module)",
    ideal: "Enabled",
    description: "Checks if a TPM is present and active. Required by some software and newer Windows security features.",
    fix: "Enable TPM in BIOS under Security > TPM or PTT settings."
  }
];

export default function SupportGuide() {
  return (
    <div className="p-6 space-y-6 max-w-4xl mx-auto">
      <h1 className="text-4xl font-bold">System Compatibility Support Guide</h1>
      <p className="text-muted-foreground">
        This support guide provides a breakdown of all the key system-level components we recommend reviewing. Each tab includes a definition, ideal state, and instructions to resolve common issues.
      </p>

      <Tabs defaultValue="os" className="w-full">
        <TabsList className="flex flex-wrap gap-2">
          {diagnosticItems.map((item) => (
            <TabsTrigger value={item.key} key={item.key} className="text-sm">
              {item.title}
            </TabsTrigger>
          ))}
        </TabsList>

        {diagnosticItems.map((item) => (
          <TabsContent value={item.key} key={item.key}>
            <Card>
              <CardContent className="p-6 space-y-4">
                <h2 className="text-xl font-semibold">{item.title}</h2>
                <p className="text-sm text-muted-foreground">{item.description}</p>
                <div className="flex items-center gap-2">
                  <Check className="text-green-500" />
                  <strong>Ideal State:</strong>
                  <span>{item.ideal}</span>
                </div>
                <div className="flex items-center gap-2">
                  <XCircle className="text-red-500" />
                  <strong>How to Fix:</strong>
                  <span>{item.fix}</span>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        ))}
      </Tabs>
    </div>
  );
}
