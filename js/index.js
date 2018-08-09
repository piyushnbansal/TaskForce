var team_list = [
    {
        "name": 'John Dove',
        "descp": 'Manager',
    },
    {
        "name": 'John Dove',
        "descp": 'Manager',
    },
    {
        "name": 'John Dove',
        "descp": 'Manager',
    },
];

$(document).ready(function() {
    team_html = '';
    for (var i = 0; i < team_list.length; i++) {
        team_html += `<div class="center tskf-team-card">
            <img class="responsive-img circle tskf-team-img" src="https://placem.at/people?w=350&h=350">
            <h5 class="tskf-header-font tskf-thicken">` + team_list[i].name + `</h5>
            <h6 class="tskf-descp">` + team_list[i].descp + `</h6>
        </div>
        `;
    }
    $('.tskf-team-row').html(team_html);
});
