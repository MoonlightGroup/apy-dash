{ pkgs }: {
    deps = [
        pkgs.yarn
        pkgs.yarn
        pkgs.esbuild
        pkgs.nodejs-16_x
			  pkgs.python38Full

        pkgs.nodePackages.typescript
        pkgs.nodePackages.typescript-language-server
    ];
}