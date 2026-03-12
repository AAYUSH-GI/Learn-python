import { useAppStore } from '@/context/useAppStore';

export function SettingsPage() {
  const { editorFontSize, setEditorFontSize, resetProgress } = useAppStore();
  return (
    <div className="card space-y-3">
      <h2 className="text-xl font-bold">Settings</h2>
      <label className="block">Editor Font Size: {editorFontSize}
        <input type="range" min={12} max={20} value={editorFontSize} onChange={(e) => setEditorFontSize(Number(e.target.value))} className="w-full" />
      </label>
      <button onClick={resetProgress} className="rounded border border-red-500 px-3 py-1 text-red-400">Reset Learning Progress</button>
    </div>
  );
}
