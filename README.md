# TwoHearts Connection

TWOHEARTS — INITIAL REPOSITORY ACCESS + CONDITIONAL BUILD START

This is a fresh TwoHearts build.

You are working with the TwoHearts project through the available

Lovable workspace and/or connected GitHub repository.

Your first responsibility is to verify that you can access the

required project materials.

============================================================

1. REPOSITORY ACCESS

============================================================

Check whether you can access the TwoHearts GitHub repository through

your available connectors/integrations.

If GitHub access is available, use it.

If the connector requires permissions, verify that you have the

permissions necessary to:

- read the repository

- inspect files and folders

- read the roadmap

- read the master prompt

- inspect UI reference screens/assets

- create and modify project files

- create the application source code

- create documentation

- create configuration/build files

- commit/push changes if that capability is available and required

Do not stop merely because the repository is being accessed through

a connector instead of the normal Lovable filesystem.

============================================================

2. REQUIRED PROJECT MATERIALS

============================================================

Inspect the repository and locate the project's source-of-truth

materials, including:

- TwoHearts V1 roadmap

- TwoHearts V1 master build prompt

- UI reference screens

- relevant MD files

- relevant TXT files

- assets

- existing source code

- configuration files

- existing build configuration

- README or other project documentation

There may be additional relevant documentation in the repository.

Do not assume that only the files explicitly named above matter.

Read the relevant project documentation before making major

architectural decisions.

============================================================

3. UI REFERENCE SCREENS

============================================================

Inspect the complete UI reference collection available in the

repository.

The UI references define the visual foundation of TwoHearts.

Do not assume that a screen's folder number or filename is the same

as its roadmap number.

Identify screens by:

- title

- purpose

- feature

- visual content

- roadmap context

Do not create duplicate screens because of numbering differences.

============================================================

4. ROADMAP + MASTER PROMPT

============================================================

Read the complete TwoHearts V1 roadmap.

Read the complete TwoHearts V1 master build prompt.

Treat those documents as the primary project instructions.

Use the roadmap for:

- feature architecture

- required functionality

- screen coverage

- project scope

Use the UI references for:

- visual identity

- layout

- hierarchy

- colors

- typography

- components

- navigation

- visual style

Use both together.

============================================================

5. EXISTING IMPLEMENTATION

============================================================

Determine whether the repository already contains an implementation.

If existing source code is present:

- inspect it

- understand its architecture

- determine what is reusable

- preserve useful existing work where appropriate

- do not blindly rebuild everything from scratch

- do not delete working features without a clear reason

If there is no usable implementation, establish the appropriate

project foundation according to the current TwoHearts master prompt.

============================================================

6. ACCESS SUCCESS CONDITION

============================================================

If you successfully have access to the repository and can read the

required roadmap, master prompt, and UI references:

DO NOT STOP AFTER THE INSPECTION.

Proceed with generating and implementing the TwoHearts application.

You do not need to wait for another confirmation merely because the

initial inspection succeeded.

Continue systematically from the project requirements.

============================================================

7. ACCESS / CONNECTOR FAILURE CONDITION

============================================================

If you cannot access the repository or required project materials,

STOP instead of guessing.

Clearly identify the problem.

State whether the problem is:

- GitHub connector unavailable

- connector authentication problem

- insufficient repository permissions

- read permission failure

- write permission failure

- inaccessible files

- inaccessible UI references

- inaccessible roadmap

- inaccessible master prompt

- repository not found

- connector/tool failure

- another specific technical issue

Explain exactly what you were able to access and what you could not.

Do not fabricate missing project information.

Do not replace inaccessible files with assumptions.

============================================================

8. IMPLEMENTATION FAILURE / ERROR CONDITION

============================================================

Once you begin implementation, you are allowed to continue normally.

If you encounter an actual technical error that prevents safe

progress, you may stop and report it.

Clearly distinguish between:

A. CONNECTOR / ACCESS PROBLEM

   Example:

   GitHub connector cannot read or write the repository.

B. PERMISSION PROBLEM

   Example:

   Repository is visible but the connected account does not have

   permission to modify it.

C. PROJECT / CODE ERROR

   Example:

   A dependency, configuration, source file, build process, or

   generated code is causing an implementation failure.

D. AMBIGUOUS PROJECT REQUIREMENT

   Example:

   The repository contains conflicting source-of-truth instructions.

Do not simply say "I cannot continue."

Tell me the actual category and explain the specific error.

If the problem is fixable without changing the project requirements,

attempt the appropriate fix before stopping.

============================================================

9. DO NOT SUBSTITUTE A DIFFERENT PROJECT

============================================================

Do not turn TwoHearts into:

- a generic website

- a generic dashboard

- a generic relationship template

- a different application

- an unrelated starter project

The implementation must remain TwoHearts.

Preserve the supplied visual identity and functionality.

============================================================

10. CURRENT APPLICATION DIRECTION

============================================================

Follow the CURRENT TwoHearts master prompt and roadmap in the

repository as the authoritative implementation requirements.

The application is intended to be a mobile application that can be

packaged for Android using the project's Capacitor architecture.

Do not revert to the previous native-Java-only architecture merely

because older repository files may contain references to it.

If older implementation files conflict with the current project

instructions, identify the conflict and follow the current

source-of-truth documents.

The final application should feel like a carefully designed mobile

application, not like a generic website squeezed into a phone.

============================================================

11. CUSTOMIZATION STRUCTURE

============================================================

The owner needs a dedicated, obvious place in the source tree for

system-wide customization.

Create a clearly organized customization/content structure.

The owner should be able to easily locate and modify things such as:

- photos

- logos

- icons

- colors

- default text

- game questions

- game answers

- game choices

- game prompts

- notification text

- default settings

- replaceable illustrations

- other personalizable content

Do not scatter these values throughout unrelated application logic.

Game questions and answers must be separated from the game engine.

The owner should be able to personalize game content without

rewriting the game engine.

============================================================

12. CUSTOMIZATION DOCUMENTATION

============================================================

The project must contain the required:

TWOHEARTS_CUSTOMIZATION_GUIDE.md

It must explain where the owner can find and change the major

customizable parts of the application.

Do not invent paths in the documentation.

Use the actual paths created in the project.

Also provide a quick "Where do I change this?" index.

============================================================

13. BUILD DOCUMENTATION

============================================================

The project must also contain the required README.md and the

appropriate build/deployment documentation specified by the master

prompt.

The owner should eventually be able to modify the project, push it

to GitHub, run the configured GitHub Actions workflow, obtain the APK,

and install it on an Android device.

============================================================

14. DO NOT WAIT UNNECESSARILY

============================================================

If repository access is working and the required materials are

available:

INSPECT → UNDERSTAND → IMPLEMENT.

Do not stop after simply reporting what files exist.

Do not ask for permission for every normal implementation step.

Use the project documents as your instructions.

Only stop when:

- required repository access is unavailable,

- required permissions are missing,

- a genuine technical blocker cannot safely be resolved,

- or the project contains a serious unresolved contradiction.

============================================================

15. FIRST ACTION

============================================================

Begin by checking the available GitHub connector/repository access.

Then inspect the repository and read the required TwoHearts

roadmap, master prompt, UI references, and relevant documentation.

If everything required is accessible, continue directly into the

implementation.

If access fails, stop and report the exact connector/permission

problem.

Do not guess.

============================================================

END INITIAL INSTRUCTION

============================================================

This project was built with [Lovable](https://lovable.dev).

## Build with Lovable

Continue developing this project in the [Lovable editor](https://lovable.dev/projects/930a41bd-eb65-4f14-b3b8-61026aa19398).

- **Ship faster**: describe what you want to build and Lovable handles the code.
- **Stay in sync**: every change made in Lovable is committed straight to this repository.
- **Full ownership**: this code is yours. Push to `main` on GitHub and your changes sync back into Lovable, ready for your next prompt.

## Development

Prefer working locally? You need Node.js and npm — [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating).

```sh
git clone <this-repository-url>
cd <repository-name>
npm i
npm run dev
```
