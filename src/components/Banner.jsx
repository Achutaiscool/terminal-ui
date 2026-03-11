const ascii = `
 █████╗ ██████╗ ███████╗███╗   ██╗███╗   ███╗ █████╗ ████████╗███████╗
██╔══██╗██╔══██╗██╔════╝████╗  ██║████╗ ████║██╔══██╗╚══██╔══╝██╔════╝
██║  ██║██████╔╝█████╗  ██╔██╗ ██║██╔████╔██║███████║   ██║   █████╗  
██║  ██║██╔═══╝ ██╔══╝  ██║╚██╗██║██║╚██╔╝██║██╔══██║   ██║   ██╔══╝  
 █████╔╝██║     ███████╗██║ ╚████║██║ ╚═╝ ██║██║  ██║   ██║   ███████╗
 ╚════╝ ╚═╝     ╚══════╝╚═╝  ╚═══╝╚═╝     ╚═╝╚═╝  ╚═╝   ╚═╝   ╚══════╝`;
export default function Banner() {
  return (
    <>
    <div className="flex justify-center items-start "
      style={{
        background:
          "radial-gradient(ellipse at center, #1a1208 0%, #0b0703 60%, #000 100%)"
      }}
    >
      <div className="w-full bg-black py-15 min-h-[300px] flex justify-center pt-30">
        <div>
          <pre
            className="crt-text  inline-block text-[#ffb45a] "
            data-text={ascii}
            style={{
              lineHeight: "1.15",
              fontSize: "30px",
              fontVariantNumeric: "tabular-nums",
              letterSpacing: "0px"
            }}
          >
            {ascii}
          </pre>
        </div>
      </div>
    </div>
    </>
  );
}
