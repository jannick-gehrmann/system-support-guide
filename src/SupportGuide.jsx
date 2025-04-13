import React, { useState } from 'react';
import './index.css';

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
    description: "Checks if UEFI Secure Boot is enabled. This can prevent loading of unsigned drivers.",
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
    description: "Indicates whether hardware virtualization support is enabled in firmware. Required for certain sandboxed tools.",
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
  const [selected, setSelected] = useState("os");

  return (
    <div style={{ padding: '2rem', maxWidth: '900px', margin: '0 auto', fontFamily: 'sans-serif' }}>
      <h1 style={{ fontSize: '2rem', fontWeight: 'bold' }}>System Compatibility Support Guide</h1>
      <p style={{ color: '#666' }}>
        This support guide provides a breakdown of all the key system-level components we recommend reviewing. Click each item to see what it means, what the ideal state is, and how to fix issues.
      </p>

      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem', marginTop: '1rem' }}>
        {diagnosticItems.map((item) => (
          <button
          key={item.key}
          onClick={() => setSelected(item.key)}
          className={selected === item.key ? 'active' : ''}
            style={{
              padding: '0.5rem 1rem',
              border: '1px solid #ccc',
              backgroundColor: selected === item.key ? '#007acc' : 'white',
              color: selected === item.key ? 'white' : 'black',
              borderRadius: '5px',
              cursor: 'pointer'
            }}
          >
            {item.title}
          </button>
        ))}
      </div>

      <div style={{ marginTop: '2rem', border: '1px solid #ddd', borderRadius: '8px', padding: '1rem' }}>
        {diagnosticItems.map((item) =>
          item.key === selected ? (
            <div key={item.key}>
              <h2 style={{ fontSize: '1.5rem', fontWeight: '600' }}>{item.title}</h2>
              <p style={{ marginBottom: '1rem', color: '#444' }}>{item.description}</p>
              <p><strong>✅ Ideal State:</strong> {item.ideal}</p>
              <p><strong>🔧 How to Fix:</strong> {item.fix}</p>
            </div>
          ) : null
        )}
      </div>
    </div>
  );
}