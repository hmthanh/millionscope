import { useData } from "@/client/hooks";
// import { jsxRuntime } from "react/jsx-runtime";
import type { Components } from "@/client/mdx";
import { useMDXComponents } from "@/client/mdx";
import { jsxRuntime } from "@mdx-remote/jsx-runtime";

export function evaluate(compiledSource: string, scope: Record<string, unknown> = {}) {
  const keys = Object.keys(scope);
  const values = Object.values(scope);
  const hydrateFn = Reflect.construct(Function, ["$", ...keys, compiledSource]);

  return hydrateFn({ useMDXComponents, ...jsxRuntime }, ...values);
}

export function RemoteContent({
  compiledSource,
  scope,
  components,
}: {
  /**
   * Compile source
   */
  compiledSource: string;
  /**
   * An object mapping names to React components.
   * The key used will be the name accessible to MDX.
   *
   * For example: `{ ComponentName: Component }` will be accessible in the MDX as `<ComponentName/>`.
   */
  components?: Components;
  /**
   * Pass-through variables for use in the MDX content
   */
  scope?: Record<string, unknown>;
}) {
  const { default: MDXContent } = evaluate(compiledSource, scope);

  return <MDXContent components={components} />;
}

// RemoteContent.useTOC = (props: Record<string, unknown>) => {
//   const compiledSource = useData("__nextra_dynamic_mdx");
//   // console.log("compiledSource", compiledSource);
//   const { useTOC } = evaluate(compiledSource);
//   return useTOC(props);
// };
