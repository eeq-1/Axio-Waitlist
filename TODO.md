
# Bugs corrigés

## Corrections effectuées :

- [x] Bug 1 (app/page.tsx): Corrigé `<motion.image>` → `<motion.div>`
- [x] Bug 2 (components/Navbar.tsx): Supprimé l'import ClerkProvider/Waitlist non utilisé
- [x] Bug 3 (components/CompanyFooter.tsx): Corrigé le chemin d'import de XLogo
- [x] Bug 4 (components/CompanyFooter.tsx): Corrigé le chemin d'import de Button (`../components/ui/button` → `@/components/ui/button`)
- [x] Bug 5 (app/layout.tsx): Supprimé les imports non utilisés de Clerk (SignInButton, SignUpButton, SignedIn, SignedOut, UserButton)
- [x] Bug 6 (app/globals.css): Supprimé le @font-face référençant des fichiers de police inexistants (`/fonts/DotDotDot-Thin.otf`, `/fonts/DotDotDot-Regular.otf`)
- [x] Bug 7 (.vscode/settings.json): Ajouté configuration pour ignorer les warnings CSS des règles Tailwind CSS v4 (`@custom-variant`, `@theme`, `@apply`)
- [x] tsconfig.json: Corrige la configuration des paths alias

Tous les bugs ont été corrigés avec succès !


