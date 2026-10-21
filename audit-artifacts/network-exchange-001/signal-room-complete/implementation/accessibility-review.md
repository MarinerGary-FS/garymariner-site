# Independent accessibility review — local implementation

21 October 2026. Reviewed the actual compiled route at `http://127.0.0.1:3110/network`, four network component sources, network stylesheet, and matched desktop/mobile screenshot. This report concerns the authorized local inactive presentation only. Public release remains HOLD.

## Result

**Limited local keyboard/semantic review: PASS for checks performed.** No blocking accessibility defect found in those checks. This is not full accessibility conformance, spoken screen-reader acceptance, real-phone acceptance or authorization to publish. Exchange is honestly visitor-sent email only; no collection form or synthetic receipt screen appears in the implemented components.

## Independently verified in the actual browser

- Collapsed page exposes native Save vCard link, Exchange disclosure button, Share button, direct subject-preserving mailto fallback, Social/Ecosystem triggers and Nexus link. Hidden disclosure links are absent from the accessibility tree.
- Social opens with focus retained on its trigger and expanded state exposed. Tab to its Close followed by Escape closes the region, removes its contents from the accessibility tree and restores trigger focus.
- Ecosystem opens with focus retained on its trigger. Its conversation shortcut opens Exchange and moves focus to the Exchange trigger. Ecosystem remains open, demonstrating independent panels.
- Exchange contains a native mailto action and readable direct address with accurate opening-versus-sending disclosure. Its Close restores Exchange trigger focus. Escape on that now-collapsed trigger does not dismiss the separately open Ecosystem.
- Skip to contact actions followed by Tab lands on the native Save link.
- Accessible names include descriptive social account handles and explicit new-tab announcements for personal links and Nexus. Native links were inspected without activating external navigation, mail client, download or share.

## Source and responsive evidence

The implementation uses synchronized `aria-expanded`/`aria-controls`, labelled nonmodal sections, native buttons and scoped React key handlers. There is no document-level Escape handler, focus trap, background inerting, blur dismissal or scroll lock in the reviewed components. Independent open-state keys avoid one reveal resetting another. Source preserves direct vCard filename/path, subject-preserving mailto, and exact personal social allowlist.

Share source distinguishes native success/cancel/failure and confirmed clipboard writes; manual recovery supplies a labelled read-only selectable canonical URL and Select address action. Success is a polite atomic status without programmatic focus theft. These are source findings, not independently executed native/clipboard refusal tests; the separately supplied seven-case share tests are not represented here as my browser evidence.

Matched screenshot shows Save and Share together and Exchange immediately below within the 390×844 viewport. Desktop retains a distinct integrated threshold. Utility copy uses opaque surfaces, 14px disclosure text and 16px controls; controls have a 56px minimum height. CSS supports wrapping action rows, single-column mobile social/ecosystem content and a reduced-motion media query. The only default reveal is 180ms/4px; no loop, canvas, parallax or deferred-action animation appears.

## Remaining acceptance limits

- Spoken VoiceOver/NVDA output and complete forward/reverse Tab through every simultaneous state were not performed in this review. Browser accessibility-tree inspection is not equivalent.
- No independent numeric contrast audit, 200% text/zoom, operating-system reduced-motion test, short-height/narrow-device keyboard test or comprehensive intermediate-width measurement was performed here. `overflow-x:clip` and fixed display sizes should be included in enlarged-text checks so content is not hidden.
- Real vCard phone import, native-share cancellation, clipboard denial UI, mail-client behavior, QR scan and external destination availability remain separate evidence. No submission or notification delivery can be claimed from this inactive build.
- Two skip links are present: shared Skip to content and route Skip to contact actions. Both are understandable; the route-specific skip behavior was tested above. This is not a blocker.

No application changes made by this reviewer. Retain local review status and current public-release HOLD while completing the remaining owner/security/device gates.
