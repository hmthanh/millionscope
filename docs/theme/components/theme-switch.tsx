import { useTheme } from "next-themes";
import { useMounted } from "@/client/hooks";
import { MoonIcon, SunIcon } from "@/client/icons";
import type { ReactElement } from "react";
import type { z } from "zod";
import { useThemeConfig } from "@/contexts";
import type { themeOptionsSchema } from "@/theme/schemas";
import { Select } from "./select";

type ThemeSwitchProps = {
  lite?: boolean;
  className?: string;
};

type ThemeOptions = z.infer<typeof themeOptionsSchema>;

export function ThemeSwitch({ lite, className }: ThemeSwitchProps): ReactElement {
  const { setTheme, resolvedTheme, theme = "" } = useTheme();
  const mounted = useMounted();
  const config = useThemeConfig().themeSwitch;

  const IconToUse = mounted && resolvedTheme === "dark" ? MoonIcon : SunIcon;
  const options: ThemeOptions = typeof config.useOptions === "function" ? config.useOptions() : config.useOptions;

  return (
    <Select
      className={className}
      title="Change theme"
      options={[
        { key: "light", name: options.light },
        { key: "dark", name: options.dark },
        { key: "system", name: options.system },
      ]}
      onChange={(option) => {
        setTheme(option.key);
      }}
      selected={{
        key: theme,
        name: (
          <div className="nx-flex nx-items-center nx-gap-2 nx-capitalize">
            <IconToUse />
            <span className={lite ? "md:nx-hidden" : ""}>{mounted ? options[theme as keyof typeof options] : options.light}</span>
          </div>
        ),
      }}
    />
  );
}
