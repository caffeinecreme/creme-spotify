interface ElectronAPI {
  window: {
    close: () => void;
    minimize: () => void;
    maximize: () => void;
  };
  spotify?: {
    login: () => Promise<{
      success: boolean;
      accessToken?: string;
      error?: string;
    }>;
    logout: () => Promise<{ success: boolean }>;
  };
}

interface Window {
  electron: ElectronAPI;
}
