export function template (data: any): string {

    return `
        <div class="x-app__content-canvas">
            <div ait-ui="cs-row">
                <div ait-ui="cs-col">
                    <div class="content-canvas__heading">
                        <h3>${data.titleAccounts}</h3>
                    </div>
                </div>
            </div>
            <div class="x-app__content-account" style="padding: 6px"></div>
        </div>
    `;

}