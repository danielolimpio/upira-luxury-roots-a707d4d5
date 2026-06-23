import { useEffect } from "react";

/**
 * Aciona o prompt NATIVO de instalação PWA (sem modais customizados).
 * - Android/Chrome/Desktop: captura `beforeinstallprompt` e dispara no
 *   primeiro gesto do usuário (clique/tap/teclado), conforme exigido pelo
 *   navegador.
 * - iOS Safari: navegador não expõe API; usuário usa "Compartilhar →
 *   Adicionar à Tela de Início" (nativo). Não exibimos modal.
 * - Após instalado ou recusado, não reexibe na mesma sessão.
 */
const PwaInstall = () => {
  useEffect(() => {
    if (typeof window === "undefined") return;

    let deferredPrompt: any = null;
    let promptShown = false;

    const onBeforeInstallPrompt = (e: Event) => {
      // Impede mini-infobar automática para podermos disparar no gesto.
      e.preventDefault();
      deferredPrompt = e;
    };

    const triggerNativePrompt = async () => {
      if (promptShown || !deferredPrompt) return;
      promptShown = true;
      try {
        deferredPrompt.prompt();
        await deferredPrompt.userChoice;
      } catch {
        /* noop — navegador trata UI nativa */
      } finally {
        deferredPrompt = null;
        removeGestureListeners();
      }
    };

    const onAppInstalled = () => {
      deferredPrompt = null;
      removeGestureListeners();
    };

    const gestureEvents: (keyof DocumentEventMap)[] = [
      "click",
      "touchend",
      "keydown",
    ];

    const removeGestureListeners = () => {
      gestureEvents.forEach((ev) =>
        document.removeEventListener(ev, triggerNativePrompt, true),
      );
    };

    gestureEvents.forEach((ev) =>
      document.addEventListener(ev, triggerNativePrompt, true),
    );

    window.addEventListener("beforeinstallprompt", onBeforeInstallPrompt);
    window.addEventListener("appinstalled", onAppInstalled);

    return () => {
      window.removeEventListener("beforeinstallprompt", onBeforeInstallPrompt);
      window.removeEventListener("appinstalled", onAppInstalled);
      removeGestureListeners();
    };
  }, []);

  return null;
};

export default PwaInstall;
