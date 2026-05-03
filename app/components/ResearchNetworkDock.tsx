import NetworkCanvas from "~/components/network/NetworkCanvas";

/**
 * GO-SIM-style particle network on the left, all routes. No wrapper opacity
 * (landing GlobalNetworkDock used ~0.52); canvas stays crisp behind content.
 */
export function ResearchNetworkDock() {
  return (
    <div
      className="pointer-events-none fixed inset-y-0 left-0 z-0 w-[min(55vw,720px)] max-w-[58%] sm:max-w-[52%] md:max-w-[48%]"
      aria-hidden
    >
      <NetworkCanvas
        connectionsEnabled
        suspendWhenOutOfView={false}
        canvasClassName="h-full w-full"
        className="h-full w-full"
        particleCount={72}
        connectionDistance={145}
        connectionOpacityScale={1}
      />
    </div>
  );
}
